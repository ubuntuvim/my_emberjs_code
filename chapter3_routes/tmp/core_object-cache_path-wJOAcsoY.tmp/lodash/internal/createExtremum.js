define('lodash/internal/createExtremum', ['exports', 'lodash/internal/arrayExtremum', 'lodash/internal/baseCallback', 'lodash/internal/baseExtremum', 'lodash/lang/isArray', 'lodash/internal/isIterateeCall', 'lodash/internal/toIterable'], function (exports, arrayExtremum, baseCallback, baseExtremum, isArray, isIterateeCall, toIterable) {

  'use strict';

  function createExtremum(comparator, exValue) {
    return function (collection, iteratee, thisArg) {
      if (thisArg && isIterateeCall['default'](collection, iteratee, thisArg)) {
        iteratee = undefined;
      }
      iteratee = baseCallback['default'](iteratee, thisArg, 3);
      if (iteratee.length == 1) {
        collection = isArray['default'](collection) ? collection : toIterable['default'](collection);
        var result = arrayExtremum['default'](collection, iteratee, comparator, exValue);
        if (!(collection.length && result === exValue)) {
          return result;
        }
      }
      return baseExtremum['default'](collection, iteratee, comparator, exValue);
    };
  }

  exports['default'] = createExtremum;

});