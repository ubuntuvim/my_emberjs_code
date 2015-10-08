define('lodash/array/fill', ['exports', 'lodash/internal/baseFill', 'lodash/internal/isIterateeCall'], function (exports, baseFill, isIterateeCall) {

  'use strict';

  function fill(array, value, start, end) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (start && typeof start != 'number' && isIterateeCall['default'](array, value, start)) {
      start = 0;
      end = length;
    }
    return baseFill['default'](array, value, start, end);
  }

  exports['default'] = fill;

});