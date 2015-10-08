define('lodash/array/without', ['exports', 'lodash/internal/baseDifference', 'lodash/internal/isArrayLike', 'lodash/function/restParam'], function (exports, baseDifference, isArrayLike, restParam) {

  'use strict';

  var without = restParam['default'](function (array, values) {
    return isArrayLike['default'](array) ? baseDifference['default'](array, values) : [];
  });

  exports['default'] = without;

});