define('lodash/internal/createReduce', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseReduce', 'lodash/lang/isArray'], function (exports, baseCallback, baseReduce, isArray) {

  'use strict';

  function createReduce(arrayFunc, eachFunc) {
    return function (collection, iteratee, accumulator, thisArg) {
      var initFromArray = arguments.length < 3;
      return typeof iteratee == 'function' && thisArg === undefined && isArray['default'](collection) ? arrayFunc(collection, iteratee, accumulator, initFromArray) : baseReduce['default'](collection, baseCallback['default'](iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
    };
  }

  exports['default'] = createReduce;

});