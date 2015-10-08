define('lodash/collection/sortBy', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseMap', 'lodash/internal/baseSortBy', 'lodash/internal/compareAscending', 'lodash/internal/isIterateeCall'], function (exports, baseCallback, baseMap, baseSortBy, compareAscending, isIterateeCall) {

  'use strict';

  function sortBy(collection, iteratee, thisArg) {
    if (collection == null) {
      return [];
    }
    if (thisArg && isIterateeCall['default'](collection, iteratee, thisArg)) {
      iteratee = undefined;
    }
    var index = -1;
    iteratee = baseCallback['default'](iteratee, thisArg, 3);

    var result = baseMap['default'](collection, function (value, key, collection) {
      return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
    });
    return baseSortBy['default'](result, compareAscending['default']);
  }

  exports['default'] = sortBy;

});