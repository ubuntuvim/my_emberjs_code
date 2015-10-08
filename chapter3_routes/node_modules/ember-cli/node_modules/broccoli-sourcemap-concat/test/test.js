/* global describe, afterEach, it, expect */

var expect = require('chai').expect;  // jshint ignore:line
var sinon = require('sinon');
var concat = require('..');
var fs = require('fs');
var path = require('path');
var broccoli = require('broccoli');
var merge = require('broccoli-merge-trees');

var firstFixture = path.join(__dirname, 'fixtures', 'first');
var secondFixture = path.join(__dirname, 'fixtures', 'second');
var builder;

describe('sourcemap-concat', function() {
  it('concatenates files in one dir', function() {
    var node = concat(firstFixture, {
      outputFile: '/all-inner.js',
      inputFiles: ['inner/*.js']
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('all-inner.js').in(result);
      expectFile('all-inner.map').in(result);
    });
  });

  it('concatenates files across dirs', function() {
    var node = concat(firstFixture, {
      outputFile: '/all.js',
      inputFiles: ['**/*.js']
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('all.js').in(result);
      expectFile('all.map').in(result);
    });
  });

  it('inserts header', function() {
    var node = concat(firstFixture, {
      outputFile: '/all-with-header.js',
      inputFiles: ['**/*.js'],
      header: "/* This is my header. */"
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('all-with-header.js').in(result);
      expectFile('all-with-header.map').in(result);
    });
  });

  it('inserts header when sourcemaps are disabled', function() {
    var node = concat(firstFixture, {
      outputFile: '/all-with-header.js',
      inputFiles: ['**/*.js'],
      header: "/* This is my header. */",
      sourceMapConfig: { enabled: false }
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('all-with-header.js').withoutSrcURL().in(result);
      expectFile('all-with-header.map').notIn(result);
    });
  });

  it('disables sourcemaps when requested', function() {
    var node = concat(firstFixture, {
      outputFile: '/no-sourcemap.js',
      inputFiles: ['**/*.js'],
      header: "/* This is my header. */",
      sourceMapConfig: { extensions: [] }
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('no-sourcemap.js').in(result);
      expectFile('no-sourcemap.map').notIn(result);
    });
  });

  it('assimilates existing sourcemap', function() {
    var inner = concat(firstFixture, {
      outputFile: '/all-inner.js',
      inputFiles: ['inner/*.js'],
      header: "/* This is my header. */"
    });
    var other = concat(firstFixture, {
      outputFile: '/all-other.js',
      inputFiles: ['other/*.js'],
      header: "/* Other header. */"
    });

    var final = concat(merge([inner, other]), {
      outputFile: '/staged.js',
      inputFiles: ['all-inner.js', 'all-other.js'],
    });

    builder = new broccoli.Builder(final);
    return builder.build().then(function(result) {
      expectFile('staged.js').in(result);
      expectFile('staged.map').in(result);
    });
  });

  it('dedupe uniques in inputFiles (with simpleconcat)', function() {
    var final = concat(firstFixture, {
      outputFile: '/staged.js',
      inputFiles: ['inner/first.js', 'inner/second.js', 'inner/first.js'],
      sourceMapConfig: {
        enabled: false
      }
    });

    builder = new broccoli.Builder(final);
    return builder.build().then(function(result) {
      var actual = fs.readFileSync(result.directory + '/staged.js', 'UTF-8');

      var firstFixture = path.join(__dirname, 'fixtures', 'first');
      var first = fs.readFileSync(path.join(firstFixture, 'inner/first.js'), 'UTF-8');
      var second = fs.readFileSync(path.join(firstFixture, 'inner/second.js'), 'UTF-8');

      var expected = first + '\n' +  second;
      assertFileEqual(actual, expected, 'output is wrong');
    });
  });

  it('dedupe uniques in inputFiles (with sourcemaps)', function() {
    var final = concat(firstFixture, {
      outputFile: '/staged.js',
      inputFiles: ['inner/first.js', 'inner/second.js', 'inner/first.js']
    });

    builder = new broccoli.Builder(final);
    return builder.build().then(function(result) {
      var actual = fs.readFileSync(result.directory + '/staged.js', 'UTF-8');

      var firstFixture = path.join(__dirname, 'fixtures', 'first');
      var first = fs.readFileSync(path.join(firstFixture, 'inner/first.js'), 'UTF-8');
      var second = fs.readFileSync(path.join(firstFixture, 'inner/second.js'), 'UTF-8');

      var expected = first + '\n' +  second + '//# sourceMappingURL=staged.map';
      assertFileEqual(actual, expected, 'output is wrong');
    });
  });

  it('appends footer files', function() {
    var node = concat(firstFixture, {
      outputFile: '/inner-with-footers.js',
      inputFiles: ['inner/*.js'],
      footerFiles: ['other/third.js', 'other/fourth.js']
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('inner-with-footers.js').in(result);
      expectFile('inner-with-footers.map').in(result);
    });
  });

  it('appends footer files when sourcemaps are disabled', function() {
    var node = concat(firstFixture, {
      outputFile: '/inner-with-footers.js',
      inputFiles: ['inner/*.js'],
      footerFiles: ['other/third.js', 'other/fourth.js'],
      sourceMapConfig: { extensions: [] }
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('inner-with-footers.js').withoutSrcURL().in(result);
      expectFile('inner-with-footers.map').notIn(result);
    });
  });

  it('can ignore empty content', function() {
    var node = concat(firstFixture, {
      outputFile: '/nothing.js',
      inputFiles: ['nothing/*.js'],
      allowNone: true
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('nothing.js').in(result);
      expectFile('nothing.map').in(result);
    });
  });

  it('can ignore empty content when sourcemaps are disabled', function() {
    var node = concat(firstFixture, {
      outputFile: '/nothing.css',
      inputFiles: ['nothing/*.css'],
      allowNone: true
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('nothing.css').in(result);
    });
  });

  it('does not ignore empty content when allowNone is not explicitly set', function() {
    var node = concat(firstFixture, {
      outputFile: '/nothing.js',
      inputFiles: ['nothing/*.js']
    });
    var failure = sinon.spy();
    builder = new broccoli.Builder(node);
    return builder.build().catch(failure).then(function(){
      expect(failure.called).to.be.true();
    });
  });

  it('does not ignore empty content when allowNone is not explicitly set and sourcemaps are disabled', function() {
    var node = concat(firstFixture, {
      outputFile: '/nothing.css',
      inputFiles: ['nothing/*.css']
    });
    var failure = sinon.spy();
    builder = new broccoli.Builder(node);
    return builder.build().catch(failure).then(function(){
      expect(failure.called).to.be.true();
    });
  });

  it('is not fooled by directories named *.js', function() {
    var node = concat(secondFixture, {
      outputFile: '/sneaky.js',
      inputFiles: ['**/*.js']
    });
    builder = new broccoli.Builder(node);
    return builder.build().then(function(result) {
      expectFile('sneaky.js').in(result);
      expectFile('sneaky.map').in(result);
    });
  });

  afterEach(function() {
    if (builder) {
      return builder.cleanup();
    }
  });

});

function expectFile(filename) {
  var stripURL = false;

  return {
    in: function(result, subdir) {
      if (!subdir) {
        subdir = '.';
      }

      var actualContent = fs.readFileSync(path.join(result.directory, subdir, filename), 'utf-8');
      fs.writeFileSync(path.join(__dirname, 'actual', filename), actualContent);

      var expectedContent;

      try {
        expectedContent = fs.readFileSync(path.join(__dirname, 'expected', filename), 'utf-8');
        if (stripURL) {
          expectedContent = expectedContent.replace(/\/\/# sourceMappingURL=.*$/, '');
        }

      } catch (err) {
        console.warn('Missing expcted file: ' + path.join(__dirname, 'expected', filename));
      }

      expectSameFiles(actualContent, expectedContent, filename);

      return this;
    },

    notIn: function(result) {
      expect(fs.existsSync(path.join(result.directory, filename))).to.equal(false, filename + ' should not have been present');
      return this;
    },

    withoutSrcURL: function() {
      stripURL = true;
      return this;
    }
  };
}

function expectSameFiles(actualContent, expectedContent, filename) {
  if (/\.map$/.test(filename)) {
    expect(JSON.parse(actualContent)).to.deep.equal(expectedContent ? JSON.parse(expectedContent) : undefined, 'discrepancy in ' + filename);
  } else {
    expect(actualContent).to.equal(expectedContent, 'discrepancy in ' + filename);
  }
}

function assertFileEqual(actual, expected, message) {
  if (actual === expected) {
    expect(true).to.be.true;
  } else {
    throw new EqualityError('output is wrong', actual, expected);
  }
}

function EqualityError(message, actual, expected) {
  this.message = message;
  this.actual = actual;
  this.expected = expected;
  this.showDiff = true;
  Error.captureStackTrace(this, module.exports);
}

EqualityError.prototype = Object.create(Error.prototype);
EqualityError.prototype.name = 'EqualityError';
EqualityError.prototype.constructor = EqualityError;

