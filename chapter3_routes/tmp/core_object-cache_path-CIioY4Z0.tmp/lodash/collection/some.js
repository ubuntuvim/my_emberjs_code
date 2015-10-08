define('lodash/collection/some', ['exports', 'lodash/internal/arraySome', 'lodash/internal/baseCallback', 'lodash/internal/baseSome', 'lodash/lang/isArray', 'lodash/internal/isIterateeCall'], function (exports, arraySome, baseCallback, baseSome, isArray, isIterateeCall) {

  'use strict';

  function some(collection, predicate, thisArg) {
    var func = isArray['default'](collection) ? arraySome['default'] : baseSome['default'];
    if (thisArg && isIterateeCall['default'](collection, predicate, thisArg)) {
      predicate = undefined;
    }
    if (typeof predicate != 'function' || thisArg !== undefined) {
      predicate = baseCallback['default'](predicate, thisArg, 3);
    }
    return func(collection, predicate);
  }

  exports['default'] = some;

});