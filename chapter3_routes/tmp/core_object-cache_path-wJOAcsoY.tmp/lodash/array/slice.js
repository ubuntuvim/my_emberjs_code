define('lodash/array/slice', ['exports', 'lodash/internal/baseSlice', 'lodash/internal/isIterateeCall'], function (exports, baseSlice, isIterateeCall) {

  'use strict';

  function slice(array, start, end) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (end && typeof end != 'number' && isIterateeCall['default'](array, start, end)) {
      start = 0;
      end = length;
    }
    return baseSlice['default'](array, start, end);
  }

  exports['default'] = slice;

});