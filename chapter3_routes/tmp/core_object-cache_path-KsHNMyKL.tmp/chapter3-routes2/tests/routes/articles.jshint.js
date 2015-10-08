define('chapter3-routes2/tests/routes/articles.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/articles.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/articles.js should pass jshint.\nroutes/articles.js: line 7, col 44, \'transition\' is defined but never used.\n\n1 error'); 
  });

});