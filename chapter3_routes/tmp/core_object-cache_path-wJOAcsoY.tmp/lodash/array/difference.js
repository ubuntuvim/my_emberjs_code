define('lodash/array/difference', ['exports', 'lodash/internal/baseDifference', 'lodash/internal/baseFlatten', 'lodash/internal/isArrayLike', 'lodash/internal/isObjectLike', 'lodash/function/restParam'], function (exports, baseDifference, baseFlatten, isArrayLike, isObjectLike, restParam) {

  'use strict';

  var difference = restParam['default'](function (array, values) {
    return isObjectLike['default'](array) && isArrayLike['default'](array) ? baseDifference['default'](array, baseFlatten['default'](values, false, true)) : [];
  });

  exports['default'] = difference;

});