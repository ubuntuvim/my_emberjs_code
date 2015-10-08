define('lodash/math/sum', ['exports', 'lodash/internal/arraySum', 'lodash/internal/baseCallback', 'lodash/internal/baseSum', 'lodash/lang/isArray', 'lodash/internal/isIterateeCall', 'lodash/internal/toIterable'], function (exports, arraySum, baseCallback, baseSum, isArray, isIterateeCall, toIterable) {

  'use strict';

  function sum(collection, iteratee, thisArg) {
    if (thisArg && isIterateeCall['default'](collection, iteratee, thisArg)) {
      iteratee = undefined;
    }
    iteratee = baseCallback['default'](iteratee, thisArg, 3);
    return iteratee.length == 1 ? arraySum['default'](isArray['default'](collection) ? collection : toIterable['default'](collection), iteratee) : baseSum['default'](collection, iteratee);
  }

  exports['default'] = sum;

});