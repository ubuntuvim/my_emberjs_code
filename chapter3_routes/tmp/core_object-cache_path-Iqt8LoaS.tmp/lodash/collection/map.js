define('lodash/collection/map', ['exports', 'lodash/internal/arrayMap', 'lodash/internal/baseCallback', 'lodash/internal/baseMap', 'lodash/lang/isArray'], function (exports, arrayMap, baseCallback, baseMap, isArray) {

  'use strict';

  function map(collection, iteratee, thisArg) {
    var func = isArray['default'](collection) ? arrayMap['default'] : baseMap['default'];
    iteratee = baseCallback['default'](iteratee, thisArg, 3);
    return func(collection, iteratee);
  }

  exports['default'] = map;

});