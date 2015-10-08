var CachingWriter = require('broccoli-caching-writer');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var helpers = require('broccoli-kitchen-sink-helpers');
var uniq = require('lodash.uniq');

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

module.exports = SimpleConcat;
SimpleConcat.prototype = Object.create(CachingWriter.prototype);
SimpleConcat.prototype.constructor = SimpleConcat;
function SimpleConcat(inputNode, options) {
  if (!(this instanceof SimpleConcat)) return new SimpleConcat(inputNode, options);
  if (!options || !options.outputFile || !options.inputFiles) {
    throw new Error('inputFiles and outputFile options ware required');
  }

  CachingWriter.call(this, [inputNode], {
    inputFiles: options.inputFiles,
    annotation: options.annotation
  });

  this.inputFiles = options.inputFiles;
  this.outputFile = options.outputFile;
  this.allowNone = options.allowNone;
  this.header = options.header;
  this.headerFiles = options.headerFiles;
  this.footer = options.footer;
  this.footerFiles = options.footerFiles;
  this.separator = (options.separator != null) ? options.separator : '\n';
}

SimpleConcat.prototype.build = function() {
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
      combined.append(fs.readFileSync(path.join(this.inputPaths[0], file), 'UTF-8'));
    }, this);
  }

  this._addFiles(combined, this.inputPaths[0], beginSection);

  if (this.footer) {
    beginSection();
    combined.append(this.footer);
  }

  if (this.footerFiles) {
    this.footerFiles.forEach(function(file) {
      beginSection();
      combined.append(fs.readFileSync(path.join(this.inputPaths[0], file), 'UTF-8'));
    }, this);
  }

  var filePath = path.join(this.outputPath, this.outputFile);

  mkdirp.sync(path.dirname(filePath));

  if (firstSection) {
    combined.append('');
  }

  fs.writeFileSync(filePath, combined);
};

SimpleConcat.prototype._addFiles = function(combined, inputPath, beginSection) {
  var files = uniq(this.listFiles());

  if (files.length === 0 && !this.allowNone) {
    throw new Error('SimpleConcat: nothing matched [' + this.inputFiles + ']');
  }

  files.forEach(function(filePath) {
    beginSection();
    combined.append(fs.readFileSync(filePath, 'UTF-8'));
  });

  return combined;
};
