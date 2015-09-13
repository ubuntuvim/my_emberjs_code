var CachingWriter = require('broccoli-caching-writer');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var helpers = require('broccoli-kitchen-sink-helpers');

function Combined() {
  this._internal = '';
}

Combined.prototype.append = function(string) {
  this._internal += string;
};

Combined.prototype.valueOf = function() {
  return this._internal;
};

Combined.prototype.toString = function() {
  return this._internal;
};

module.exports = CachingWriter.extend({
  enforceSingleInputTree: true,

  init: function() {
    this._super.apply(this, arguments);

    if (!this.separator) {
      this.separator = '\n';
    }

    if (!this.outputFile) {
      throw new Error('outputFile is required');
    }
  },

  description: 'SimpleConcat',
  updateCache: function(inDir, outDir) {
    var combined = new Combined();
    var firstSection = true;
    var separator = this.separator;

    function beginSection() {
      if (firstSection) {
        firstSection = false;
      } else {
        combined.append(separator);
      }
    }

    if (this.header) {
      beginSection();
      combined.append(this.header);
    }

    if (this.headerFiles) {
      this.headerFiles.forEach(function(file) {
        beginSection();
        combined.append(fs.readFileSync(path.join(inDir, file), 'UTF-8'));
      });
    }

    try {
      this._addFiles(combined, inDir, beginSection);
    } catch(error) {
      // multiGlob is obtuse.
      if (!error.message.match('did not match any files') || !this.allowNone) {
        throw error;
      }
    }

    if (this.footer) {
      beginSection();
      combined.append(this.footer);
    }

    if (this.footerFiles) {
      this.footerFiles.forEach(function(file) {
        beginSection();
        combined.append(fs.readFileSync(path.join(inDir, file), 'UTF-8'));
      }.bind(this));
    }

    var filePath = path.join(outDir, this.outputFile);

    mkdirp.sync(path.dirname(filePath));

    if (firstSection) {
      combined.append('');
    }

    fs.writeFileSync(filePath, combined);
  },

  _addFiles: function(combined, inDir, beginSection) {
    helpers.multiGlob(this.inputFiles, {
      cwd: inDir,
      root: inDir,
      nomount: false
    }).forEach(function(file) {
      var filePath = path.join(inDir, file);
      var stat;

      try {
        stat = fs.statSync(filePath);
      } catch(err) {}

      if (stat && !stat.isDirectory()) {
        beginSection();
        combined.append(fs.readFileSync(filePath, 'UTF-8'));
      }
    });

    return combined;
  }
});
