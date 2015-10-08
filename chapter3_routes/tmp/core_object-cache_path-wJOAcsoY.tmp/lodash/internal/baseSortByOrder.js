define('lodash/internal/baseSortByOrder', ['exports', 'lodash/internal/arrayMap', 'lodash/internal/baseCallback', 'lodash/internal/baseMap', 'lodash/internal/baseSortBy', 'lodash/internal/compareMultiple'], function (exports, arrayMap, baseCallback, baseMap, baseSortBy, compareMultiple) {

  'use strict';

  function baseSortByOrder(collection, iteratees, orders) {
    var index = -1;

    iteratees = arrayMap['default'](iteratees, function (iteratee) {
      return baseCallback['default'](iteratee);
    });

    var result = baseMap['default'](collection, function (value) {
      var criteria = arrayMap['default'](iteratees, function (iteratee) {
        return iteratee(value);
      });
      return { 'criteria': criteria, 'index': ++index, 'value': value };
    });

    return baseSortBy['default'](result, function (object, other) {
      return compareMultiple['default'](object, other, orders);
    });
  }

  exports['default'] = baseSortByOrder;

});