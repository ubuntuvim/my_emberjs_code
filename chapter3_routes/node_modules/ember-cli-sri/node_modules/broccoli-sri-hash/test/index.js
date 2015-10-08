var chai = require('chai');
var assert = chai.assert;
var fs = require('fs');

describe('broccoli-sri-hash', function () {

  it('rule outputs match', function () {

    var fileTmpContents = fs.readFileSync('tmp/output/test.html', {encoding: 'utf8'});
    var fileContents = fs.readFileSync('test/fixtures/output/test.html', {encoding: 'utf8'});

    assert.equal(fileTmpContents.trim(), fileContents.trim());
  });

  it('Must lint', function () {
    var fileTmpContents = fs.readFileSync('tmp/lint-out', {encoding: 'utf8'});
    assert.notMatch(fileTmpContents, /[0-9]+\s+problems?\s\([0-9]+\serrors?,\s[0-9]+\swarnings?\)/)
  });
});
