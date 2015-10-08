define('lodash/collection/sortByAll', ['exports', 'lodash/internal/baseFlatten', 'lodash/internal/baseSortByOrder', 'lodash/internal/isIterateeCall', 'lodash/function/restParam'], function (exports, baseFlatten, baseSortByOrder, isIterateeCall, restParam) {

  'use strict';

  var sortByAll = restParam['default'](function (collection, iteratees) {
    if (collection == null) {
      return [];
    }
    var guard = iteratees[2];
    if (guard && isIterateeCall['default'](iteratees[0], iteratees[1], guard)) {
      iteratees.length = 1;
    }
    return baseSortByOrder['default'](collection, baseFlatten['default'](iteratees), []);
  });

  exports['default'] = sortByAll;

});