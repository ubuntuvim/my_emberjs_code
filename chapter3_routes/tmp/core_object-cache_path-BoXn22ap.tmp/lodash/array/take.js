define('lodash/array/take', ['exports', 'lodash/internal/baseSlice', 'lodash/internal/isIterateeCall'], function (exports, baseSlice, isIterateeCall) {

  'use strict';

  function take(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall['default'](array, n, guard) : n == null) {
      n = 1;
    }
    return baseSlice['default'](array, 0, n < 0 ? 0 : n);
  }

  exports['default'] = take;

});