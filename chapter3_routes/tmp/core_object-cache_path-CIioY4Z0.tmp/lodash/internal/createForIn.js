define('lodash/internal/createForIn', ['exports', 'lodash/internal/bindCallback', 'lodash/object/keysIn'], function (exports, bindCallback, keysIn) {

  'use strict';

  function createForIn(objectFunc) {
    return function (object, iteratee, thisArg) {
      if (typeof iteratee != 'function' || thisArg !== undefined) {
        iteratee = bindCallback['default'](iteratee, thisArg, 3);
      }
      return objectFunc(object, iteratee, keysIn['default']);
    };
  }

  exports['default'] = createForIn;

});