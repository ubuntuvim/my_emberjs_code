define('lodash/array/dropRight', ['exports', 'lodash/internal/baseSlice', 'lodash/internal/isIterateeCall'], function (exports, baseSlice, isIterateeCall) {

  'use strict';

  function dropRight(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (guard ? isIterateeCall['default'](array, n, guard) : n == null) {
      n = 1;
    }
    n = length - (+n || 0);
    return baseSlice['default'](array, 0, n < 0 ? 0 : n);
  }

  exports['default'] = dropRight;

});