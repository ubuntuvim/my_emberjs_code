'use strict';

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var Promise = require('rsvp').Promise;
var Plugin = require('broccoli-plugin');
var helpers = require('broccoli-kitchen-sink-helpers');
var walkSync = require('walk-sync');
var mapSeries = require('promise-map-series');
var symlinkOrCopySync = require('symlink-or-copy').sync;
var copyDereferenceSync = require('copy-dereference').sync;
var Cache = require('./lib/cache');
var debugGenerator = require('debug');
var md5Hex = require('md5-hex');
var Processor = require('./lib/processor');
var defaultProccessor = require('./lib/strategies/default');
var hashForDep = require('hash-for-dep');

module.exports = Filter;


Filter.prototype = Object.create(Plugin.prototype);
Filter.prototype.constructor = Filter;
function Filter(inputTree, options) {
  if (!this || !(this instanceof Filter) ||
      Object.getPrototypeOf(this) === Filter.prototype) {
    throw new TypeError('Filter is an abstract class and must be sub-classed');
  }

  var name = 'broccoli-persistent-filter:' + (this.constructor.name);
  if (this.description) {
    name += ' > [' + this.description + ']';
  }

  this._debug = debugGenerator(name);

  Plugin.call(this, [inputTree]);

  this.processor = new Processor(options);
  this.processor.setStrategy(defaultProccessor);

  /* Destructuring assignment in node 0.12.2 would be really handy for this! */
  if (options) {
    if (options.extensions != null)
      this.extensions = options.extensions;
    if (options.targetExtension != null)
      this.targetExtension = options.targetExtension;
    if (options.inputEncoding != null)
      this.inputEncoding = options.inputEncoding;
    if (options.outputEncoding != null)
      this.outputEncoding = options.outputEncoding;
    if (options.persist) {
      this.processor.setStrategy(require('./lib/strategies/persistent'));
    }
  }

  this.processor.init(this);

  this._cache = new Cache();
  this._canProcessCache = Object.create(null);
  this._destFilePathCache = Object.create(null);
}

Filter.prototype.build = function build() {
  var self = this;
  var srcDir = this.inputPaths[0];
  var destDir = this.outputPath;
  var entries = walkSync.entries(srcDir);
  var paths = entries.map(byRelativePath);

  this._cache.deleteExcept(paths).forEach(function(key) {
    try {
      fs.unlinkSync(this.cachePath + '/' + key);
    } catch (e) {
      if(e.code !== 'ENOENT') {
        throw e;
      }
    }
  }, this);

  return mapSeries(paths, function rebuildEntry(relativePath, i) {
    var destPath = destDir + '/' + relativePath;
    var entry = entries[i];

    if (entry.isDirectory()) {
      mkdirp.sync(destPath);
    } else {
      if (self.canProcessFile(relativePath)) {
        return self.processAndCacheFile(srcDir, destDir, entry);
      } else {
        var srcPath = srcDir + '/' + relativePath;
        symlinkOrCopySync(srcPath, destPath);
      }
    }
  });
};

/*
 The cache key to be used for this plugins set of dependencies. By default
 a hash is created based on `package.json` and nested dependencies.

 Implement this to customize the cache key (for example if you need to
 account for non-NPM dependencies).

 @public
 @method cacheKey
 @returns {String}
 */
Filter.prototype.cacheKey = function() {
  return hashForDep(this.baseDir());
};

/* @public
 *
 * @method baseDir
 * @returns {String} absolute path to the root of the filter...
 */
Filter.prototype.baseDir = function() {
  throw Error('Filter must implement prototype.baseDir');
};

/**
 * @public
 *
 * optionally override this to build a more rhobust cache key
 * @param  {String} string The contents of a file that is being processed
 * @return {String}        A cache key
 */
Filter.prototype.cacheKeyProcessString = function(string, relativePath) {
  return md5Hex(string + 0x00 + relativePath);
};

Filter.prototype.canProcessFile =
    function canProcessFile(relativePath) {
  return !!this.getDestFilePath(relativePath);
};

Filter.prototype.getDestFilePath = function getDestFilePath(relativePath) {
  if (this.extensions == null) return relativePath;

  for (var i = 0, ii = this.extensions.length; i < ii; ++i) {
    var ext = this.extensions[i];
    if (relativePath.slice(-ext.length - 1) === '.' + ext) {
      if (this.targetExtension != null) {
        relativePath =
            relativePath.slice(0, -ext.length) + this.targetExtension;
      }
      return relativePath;
    }
  }
  return null;
};

Filter.prototype.processAndCacheFile =
    function processAndCacheFile(srcDir, destDir, entry) {
  var self = this;
  var relativePath = entry.relativePath;
  var cacheEntry = this._cache.get(relativePath);
  var outputRelativeFile = self.getDestFilePath(relativePath);

  if (cacheEntry) {
    var hashResult = hash(srcDir, cacheEntry.inputFile, entry);

    if (cacheEntry.hash.hash === hashResult.hash) {
      this._debug('cache hit: %s', relativePath);

      return symlinkOrCopyFromCache(cacheEntry, destDir, outputRelativeFile);
    } else {
      this._debug('cache miss: %s \n  - previous: %o \n  - next:     %o ', relativePath, cacheEntry.hash.key, hashResult.key);
    }

  } else {
    this._debug('cache prime: %s', relativePath);
  }

  return Promise.resolve().
      then(function asyncProcessFile() {
        return self.processFile(srcDir, destDir, relativePath);
      }).
      then(copyToCache,
      // TODO(@caitp): error wrapper is for API compat, but is not particularly
      // useful.
      // istanbul ignore next
      function asyncProcessFileErrorWrapper(e) {
        if (typeof e !== 'object') e = new Error('' + e);
        e.file = relativePath;
        e.treeDir = srcDir;
        throw e;
      });

  function copyToCache() {
    var cacheEntry = {
      hash: hash(srcDir, relativePath, entry),
      inputFile: relativePath,
      outputFile: destDir + '/' + outputRelativeFile,
      cacheFile: self.cachePath + '/' + outputRelativeFile
    };

    if (fs.existsSync(cacheEntry.cacheFile)) {
      fs.unlinkSync(cacheEntry.cacheFile);
    } else {
      mkdirp.sync(path.dirname(cacheEntry.cacheFile));
    }

    copyDereferenceSync(cacheEntry.outputFile, cacheEntry.cacheFile);

    return self._cache.set(relativePath, cacheEntry);
  }
};

function invoke(context, fn, args) {
  return new Promise(function(resolve) {
    resolve(fn.apply(context, args));
  });
}

Filter.prototype.processFile =
    function processFile(srcDir, destDir, relativePath) {
  var self = this;
  var inputEncoding = this.inputEncoding;
  var outputEncoding = this.outputEncoding;
  if (inputEncoding === void 0)  { inputEncoding  = 'utf8'; }
  if (outputEncoding === void 0) { outputEncoding = 'utf8'; }
  var contents = fs.readFileSync(
      srcDir + '/' + relativePath, { encoding: inputEncoding });

  var string = invoke(this.processor, this.processor.processString, [this, contents, relativePath]);

  return string.then(function asyncOutputFilteredFile(outputString) {
    var outputPath = self.getDestFilePath(relativePath);
    if (outputPath == null) {
      throw new Error('canProcessFile("' + relativePath + '") is true, but getDestFilePath("' + relativePath + '") is null');
    }
    outputPath = destDir + '/' + outputPath;
    mkdirp.sync(path.dirname(outputPath));
    fs.writeFileSync(outputPath, outputString, {
      encoding: outputEncoding
    });

    return outputString;
  });
};

Filter.prototype.processString =
    function unimplementedProcessString(contents, relativePath) {
  throw new Error(
      'When subclassing cauliflower-filter you must implement the ' +
      '`processString()` method.');
};

function hash(src, relativePath, entry) {
  var path = src + '/' + relativePath;

  if (entry.isDirectory()) {
    throw new Error('cannot diff directory');
  }

  return {
    key: entry,
    hash: helpers.hashStrings([
      path,
      entry.size,
      entry.mode,
      entry.mtime
    ])
  };
}

function symlinkOrCopyFromCache(entry, dest, relativePath) {
  mkdirp.sync(path.dirname(entry.outputFile));

  symlinkOrCopySync(entry.cacheFile, dest + '/' + relativePath);
}

function byRelativePath (entry) {
  return entry.relativePath;
}
