'use strict';
var sri = require('./index');

var test = sri('test/fixtures/input', {
  prefix: 'https://example.com/',
  crossorigin: 'anonymous'
});

module.exports = test;
