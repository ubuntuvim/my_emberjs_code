define('lodash/internal/createFindKey', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseFind'], function (exports, baseCallback, baseFind) {

  'use strict';

  function createFindKey(objectFunc) {
    return function (object, predicate, thisArg) {
      predicate = baseCallback['default'](predicate, thisArg, 3);
      return baseFind['default'](object, predicate, objectFunc, true);
    };
  }

  exports['default'] = createFindKey;

});