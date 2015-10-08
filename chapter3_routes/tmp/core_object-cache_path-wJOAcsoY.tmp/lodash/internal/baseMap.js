define('lodash/internal/baseMap', ['exports', 'lodash/internal/baseEach', 'lodash/internal/isArrayLike'], function (exports, baseEach, isArrayLike) {

  'use strict';

  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike['default'](collection) ? Array(collection.length) : [];

    baseEach['default'](collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  exports['default'] = baseMap;

});