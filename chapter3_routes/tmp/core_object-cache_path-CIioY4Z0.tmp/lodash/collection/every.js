define('lodash/collection/every', ['exports', 'lodash/internal/arrayEvery', 'lodash/internal/baseCallback', 'lodash/internal/baseEvery', 'lodash/lang/isArray', 'lodash/internal/isIterateeCall'], function (exports, arrayEvery, baseCallback, baseEvery, isArray, isIterateeCall) {

  'use strict';

  function every(collection, predicate, thisArg) {
    var func = isArray['default'](collection) ? arrayEvery['default'] : baseEvery['default'];
    if (thisArg && isIterateeCall['default'](collection, predicate, thisArg)) {
      predicate = undefined;
    }
    if (typeof predicate != 'function' || thisArg !== undefined) {
      predicate = baseCallback['default'](predicate, thisArg, 3);
    }
    return func(collection, predicate);
  }

  exports['default'] = every;

});