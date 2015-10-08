define('lodash/array/flattenDeep', ['exports', 'lodash/internal/baseFlatten'], function (exports, baseFlatten) {

  'use strict';

  function flattenDeep(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten['default'](array, true) : [];
  }

  exports['default'] = flattenDeep;

});