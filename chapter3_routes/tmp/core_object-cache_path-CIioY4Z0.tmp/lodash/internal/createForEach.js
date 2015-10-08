define('lodash/internal/createForEach', ['exports', 'lodash/internal/bindCallback', 'lodash/lang/isArray'], function (exports, bindCallback, isArray) {

  'use strict';

  function createForEach(arrayFunc, eachFunc) {
    return function (collection, iteratee, thisArg) {
      return typeof iteratee == 'function' && thisArg === undefined && isArray['default'](collection) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback['default'](iteratee, thisArg, 3));
    };
  }

  exports['default'] = createForEach;

});