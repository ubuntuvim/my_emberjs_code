define('lodash/collection/reject', ['exports', 'lodash/internal/arrayFilter', 'lodash/internal/baseCallback', 'lodash/internal/baseFilter', 'lodash/lang/isArray'], function (exports, arrayFilter, baseCallback, baseFilter, isArray) {

  'use strict';

  function reject(collection, predicate, thisArg) {
    var func = isArray['default'](collection) ? arrayFilter['default'] : baseFilter['default'];
    predicate = baseCallback['default'](predicate, thisArg, 3);
    return func(collection, function (value, index, collection) {
      return !predicate(value, index, collection);
    });
  }

  exports['default'] = reject;

});