define('lodash/collection/sortByOrder', ['exports', 'lodash/internal/baseSortByOrder', 'lodash/lang/isArray', 'lodash/internal/isIterateeCall'], function (exports, baseSortByOrder, isArray, isIterateeCall) {

  'use strict';

  function sortByOrder(collection, iteratees, orders, guard) {
    if (collection == null) {
      return [];
    }
    if (guard && isIterateeCall['default'](iteratees, orders, guard)) {
      orders = undefined;
    }
    if (!isArray['default'](iteratees)) {
      iteratees = iteratees == null ? [] : [iteratees];
    }
    if (!isArray['default'](orders)) {
      orders = orders == null ? [] : [orders];
    }
    return baseSortByOrder['default'](collection, iteratees, orders);
  }

  exports['default'] = sortByOrder;

});