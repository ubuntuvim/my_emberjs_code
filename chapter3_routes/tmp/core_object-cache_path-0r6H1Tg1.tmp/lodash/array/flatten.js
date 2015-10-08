define('lodash/array/flatten', ['exports', 'lodash/internal/baseFlatten', 'lodash/internal/isIterateeCall'], function (exports, baseFlatten, isIterateeCall) {

  'use strict';

  function flatten(array, isDeep, guard) {
    var length = array ? array.length : 0;
    if (guard && isIterateeCall['default'](array, isDeep, guard)) {
      isDeep = false;
    }
    return length ? baseFlatten['default'](array, isDeep) : [];
  }

  exports['default'] = flatten;

});