define('lodash/array/drop', ['exports', 'lodash/internal/baseSlice', 'lodash/internal/isIterateeCall'], function (exports, baseSlice, isIterateeCall) {

  'use strict';

  function drop(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall['default'](array, n, guard) : n == null) {
      n = 1;
    }
    return baseSlice['default'](array, n < 0 ? 0 : n);
  }

  exports['default'] = drop;

});