define('lodash/internal/createForOwn', ['exports', 'lodash/internal/bindCallback'], function (exports, bindCallback) {

  'use strict';

  function createForOwn(objectFunc) {
    return function (object, iteratee, thisArg) {
      if (typeof iteratee != 'function' || thisArg !== undefined) {
        iteratee = bindCallback['default'](iteratee, thisArg, 3);
      }
      return objectFunc(object, iteratee);
    };
  }

  exports['default'] = createForOwn;

});