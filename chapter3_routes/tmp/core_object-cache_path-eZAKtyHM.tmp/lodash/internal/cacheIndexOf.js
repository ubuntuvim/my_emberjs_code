define('lodash/internal/cacheIndexOf', ['exports', 'lodash/lang/isObject'], function (exports, isObject) {

  'use strict';

  function cacheIndexOf(cache, value) {
    var data = cache.data,
        result = typeof value == 'string' || isObject['default'](value) ? data.set.has(value) : data.hash[value];

    return result ? 0 : -1;
  }

  exports['default'] = cacheIndexOf;

});