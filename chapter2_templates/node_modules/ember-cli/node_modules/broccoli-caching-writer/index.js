var fs = require('fs');
var path = require('path');
var RSVP = require('rsvp');
var rimraf = RSVP.denodeify(require('rimraf'));
var helpers = require('broccoli-kitchen-sink-helpers');
var symlinkOrCopy = require('symlink-or-copy');
var assign = require('lodash-node/modern/object/assign');
var CoreObject = require('core-object');
var debugGenerator = require('debug');
var Key = require('./key');
var readCompatAPI = require('broccoli-read-compat');
var canUseInputFiles = require('./can-use-input-files');

var CachingWriter = {};

CachingWriter.init = function(inputTrees, options) {
  this._lastKeys = [];
  this._shouldBeIgnoredCache = Object.create(null);
  this.constructorDescription = this.description; // TODO: why do we smash this?
  this._resetStats();

  if (options) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        this[key] = options[key];
      }
    }
  }

  if (!inputTrees) {
    throw new Error('no inputTree was provided');
  }

  if (Array.isArray(inputTrees)) {
    if (this.enforceSingleInputTree) {
      throw new Error('You passed an array of input trees, but only a single tree is allowed.');
    }

    this.inputTrees = inputTrees;
  } else {
    this.inputTrees = [inputTrees];
  }

  if (this.filterFromCache === undefined) {
    this.filterFromCache = {};
  }

  if (this.filterFromCache.include === undefined) {
    this.filterFromCache.include = [];
  }

  if (this.filterFromCache.exclude === undefined) {
    this.filterFromCache.exclude = [];
  }

  if (!Array.isArray(this.filterFromCache.include)) {
    throw new Error('Invalid filterFromCache.include option, it must be an array or undefined.');
  }

  if (!Array.isArray(this.filterFromCache.exclude)) {
    throw new Error('Invalid filterFromCache.exclude option, it must be an array or undefined.');
  }
};

CachingWriter.enforceSingleInputTree = false;

CachingWriter.debug = function() {
  return this._debug || (this._debug = debugGenerator('broccoli-caching-writer:' + (this.constructorDescription || this.constructor.name) + ' > [' + this.description + ']'));
};
CachingWriter._resetStats = function() {
  this._stats = {
    stats: 0,
    files: 0
  };
};
CachingWriter.rebuild = function () {
  var writer = this;
  var start = new Date();

  var invalidateCache = false;
  var key, dir, updateCacheResult;
  var lastKeys = [];

  for (var i = 0, l = writer.inputPaths.length; i < l; i++) {
    dir = writer.inputPaths[i];

    key = writer.keyForTree(dir, undefined, dir);
    lastKey = writer._lastKeys[i];
    lastKeys.push(key);

    if (!invalidateCache /* short circuit */ && !key.equal(lastKey)) {
      invalidateCache = true;
    }
  }

  this._stats.inputPaths = writer.inputPaths;
  this._debug('rebuild %o in %dms', this._stats, new Date() - start);
  this._resetStats();

  if (invalidateCache) {
    var updateCacheSrcArg = writer.enforceSingleInputTree ? writer.inputPaths[0] : writer.inputPaths;

    writer._lastKeys = lastKeys;

    updateCacheResult = rimraf(writer.cachePath).then(function () {
      fs.mkdirSync(writer.cachePath);
      return writer.updateCache(updateCacheSrcArg, writer.cachePath);
    });

  }

  return RSVP.Promise.resolve(updateCacheResult).then(function () {
    fs.rmdirSync(writer.outputPath);
    symlinkOrCopy.sync(writer.cachePath, writer.outputPath);
  });
};

CachingWriter.updateCache = function (srcDir, destDir) {
  throw new Error('You must implement updateCache.');
};

// Takes in a path and { include, exclude }. Tests the path using regular expressions and
// returns true if the path does not match any exclude patterns AND matches atleast
// one include pattern.
CachingWriter.shouldBeIgnored = function (fullPath) {
  if (this._shouldBeIgnoredCache[fullPath] !== undefined) {
    return this._shouldBeIgnoredCache[fullPath];
  }

  var excludePatterns = this.filterFromCache.exclude;
  var includePatterns = this.filterFromCache.include;
  var i = null;

  // Check exclude patterns
  for (i = 0; i < excludePatterns.length; i++) {
    // An exclude pattern that returns true should be ignored
    if (excludePatterns[i].test(fullPath) === true) {
      return (this._shouldBeIgnoredCache[fullPath] = true);
    }
  }

  // Check include patterns
  if (includePatterns !== undefined && includePatterns.length > 0) {
    for (i = 0; i < includePatterns.length; i++) {
      // An include pattern that returns true (and wasn't excluded at all)
      // should _not_ be ignored
      if (includePatterns[i].test(fullPath) === true) {
        return (this._shouldBeIgnoredCache[fullPath] = false);
      }
    }

    // If no include patterns were matched, ignore this file.
    return (this._shouldBeIgnoredCache[fullPath] = true);
  }

  // Otherwise, don't ignore this file
  return (this._shouldBeIgnoredCache[fullPath] = false);
};

CachingWriter.keyForTree = function (fullPath, initialRelativePath, dir) {
  var relativePath = initialRelativePath || '.';
  var stats;
  var statKeys;
  var type;

  try {
    this._stats.stats++;
    stats = fs.statSync(fullPath);
  } catch (err) {
    console.warn('Warning: failed to stat ' + fullPath);
    // fullPath has probably ceased to exist. Leave `stats` undefined and
    // proceed hashing.
  }

  var children;

  // has children;
  if (stats && stats.isDirectory()) {
    type = 'directory';

    var files;

    try {
      files = fs.readdirSync(fullPath).sort();
    } catch (err) {
      console.warn('Warning: Failed to read directory ' + fullPath);
      console.warn(err.stack);
    }

    if (canUseInputFiles(this.inputFiles)) {
      children = this.inputFiles.map(function(file) {
        return this.keyForTree(
          path.join(dir, file),
          file,
          dir
        );
      }, this);
      this._stats.files += children.length;
      children = children.filter(Boolean);
    } else if (files) {
      this._stats.files += files.length;
      children = files.map(function(file) {
        return this.keyForTree(
          path.join(fullPath, file),
          path.join(relativePath, file),
          dir
        );
      }, this).filter(Boolean);
    }

  } else if (stats && stats.isFile()) {
    type = 'file';

    if (this.shouldBeIgnored(fullPath)) {
      return null;
    }
  }

  return new Key(type, fullPath, relativePath, stats, children, this.debug());
};

// Returns a list of matched files
CachingWriter.listFiles = function() {
  function listFiles(keys, files) {
    for (var i=0; i< keys.length; i++) {
      var key = keys[i]
      if (key.type === 'file') {
        files.push(key.fullPath)
      } else {
        var children = key.children;
        if(children && children.length > 0) {
          listFiles(children, files)
        }
      }
    }
    return files
  }
  return listFiles(this._lastKeys, [])
}

var CachingWriterClass = CoreObject.extend(CachingWriter);

readCompatAPI.wrapFactory(CachingWriterClass);

module.exports = CachingWriterClass;
