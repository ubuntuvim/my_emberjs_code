define('lodash/internal/baseEvery', ['exports', 'lodash/internal/baseEach'], function (exports, baseEach) {

  'use strict';

  function baseEvery(collection, predicate) {
    var result = true;
    baseEach['default'](collection, function (value, index, collection) {
      result = !!predicate(value, index, collection);
      return result;
    });
    return result;
  }

  exports['default'] = baseEvery;

});