define('lodash/internal/baseSum', ['exports', 'lodash/internal/baseEach'], function (exports, baseEach) {

  'use strict';

  function baseSum(collection, iteratee) {
    var result = 0;
    baseEach['default'](collection, function (value, index, collection) {
      result += +iteratee(value, index, collection) || 0;
    });
    return result;
  }

  exports['default'] = baseSum;

});