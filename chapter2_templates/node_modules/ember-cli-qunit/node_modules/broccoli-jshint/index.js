var fs       = require('fs');
var path     = require('path');
var chalk    = require('chalk');
var findup   = require('findup-sync');
var mkdirp   = require('mkdirp');
var JSHINT   = require('jshint').JSHINT;
var Filter   = require('broccoli-persistent-filter');
var crypto   = require('crypto');

var stringify = require('json-stable-stringify');

JSHinter.prototype = Object.create(Filter.prototype);
JSHinter.prototype.constructor = JSHinter;
function JSHinter (inputNode, options) {
  if (!(this instanceof JSHinter)) return new JSHinter(inputNode, options);

  options = options || {};
  if (!options.hasOwnProperty('persist')) {
    options.persist = true;
  }

  Filter.call(this, inputNode, {
    annotation: options.annotation,
    persist: options.persist
  });
  this.log     = true;
  this.options = options;
  this.console = console;

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key]
    }
  }
};

JSHinter.prototype.extensions = ['js'];
JSHinter.prototype.targetExtension = 'jshint.js';

JSHinter.prototype.baseDir = function() {
  return __dirname;
};

JSHinter.prototype.build = function () {
  var self = this
  self._errors = [];

  if (!self.jshintrc) {
    var jshintPath = self.jshintrcPath || path.join(this.inputPaths[0], self.jshintrcRoot || '');
    self.jshintrc = self.getConfig(jshintPath);
  }

  return Filter.prototype.build.call(this)
  .finally(function() {
    if (self._errors.length > 0) {
      var label = ' JSHint Error' + (self._errors.length > 1 ? 's' : '')
      self.console.log('\n' + self._errors.join('\n'));
      self.console.log(chalk.yellow('===== ' + self._errors.length + label + '\n'));
    }
  })
}

JSHinter.prototype.processString = function (content, relativePath) {
  var passed = JSHINT(content, this.jshintrc);
  var errors = this.processErrors(relativePath, JSHINT.errors),
      generalError;

  if (this.failOnAnyError && errors.length > 0){
    generalError = new Error('JSHint failed');
    generalError.jshintErrors = errors;
    throw generalError;
  }
  if (!passed && this.log) {
    this.logError(errors);
  }

  if (!this.disableTestGenerator) {
    return this.testGenerator(relativePath, passed, errors);
  }
};

JSHinter.prototype.processErrors = function (file, errors) {
  if (!errors) { return ''; }

  var len = errors.length,
  str = '',
  error, idx;

  if (len === 0) { return ''; }

  for (idx=0; idx<len; idx++) {
    error = errors[idx];
    if (error !== null) {
      str += file  + ': line ' + error.line + ', col ' +
        error.character + ', ' + error.reason + '\n';
    }
  }

  return str + "\n" + len + ' error' + ((len === 1) ? '' : 's');
}

JSHinter.prototype.testGenerator = function(relativePath, passed, errors) {
  if (errors) {
    errors = "\\n" + this.escapeErrorString(errors);
  } else {
    errors = ""
  }

  return "QUnit.module('JSHint - " + path.dirname(relativePath) + "');\n" +
         "QUnit.test('" + relativePath + " should pass jshint', function(assert) { \n" +
         "  assert.ok(" + !!passed + ", '" + relativePath + " should pass jshint." + errors + "'); \n" +
         "});\n"
};

JSHinter.prototype.logError = function(message, color) {
  color = color || 'red';

  this._errors.push(chalk[color](message) + "\n");
};

JSHinter.prototype.getConfig = function(rootPath) {
  if (!rootPath) { rootPath = process.cwd(); }

  var jshintrcPath = findup('.jshintrc', {cwd: rootPath, nocase: true});

  if (jshintrcPath) {
    var config = fs.readFileSync(jshintrcPath, {encoding: 'utf8'});

    try {
      return JSON.parse(this.stripComments(config));
    } catch (e) {
      this.console.error(chalk.red('Error occured parsing .jshintrc.'));
      this.console.error(e.stack);

      return null;
    }
  }
};

JSHinter.prototype.stripComments = function(string) {
  string = string || "";

  string = string.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\//g, "");
  string = string.replace(/\/\/[^\n\r]*/g, ""); // Everything after '//'

  return string;
};

JSHinter.prototype.escapeErrorString = function(string) {
  string = string.replace(/\n/gi, "\\n");
  string = string.replace(/'/gi, "\\'");

  return string;
};

JSHinter.prototype.optionsHash  = function() {
  if (!this._optionsHash) {
    this._optionsHash = crypto.createHash('md5')
      .update(stringify(this.options), 'utf8')
      .update(stringify(this.jshintrc) || '', 'utf8')
      .update(this.testGenerator.toString(), 'utf8')
      .update(this.logError.toString(), 'utf8')
      .update(this.escapeErrorString.toString(), 'utf8')
      .digest('hex');
  }

  return this._optionsHash;
};

JSHinter.prototype.cacheKeyProcessString = function(string, relativePath) {
  return this.optionsHash() + Filter.prototype.cacheKeyProcessString.call(this, string, relativePath);
};

module.exports = JSHinter;
