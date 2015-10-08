define('lodash/internal/createFindIndex', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseFindIndex'], function (exports, baseCallback, baseFindIndex) {

  'use strict';

  function createFindIndex(fromRight) {
    return function (array, predicate, thisArg) {
      if (!(array && array.length)) {
        return -1;
      }
      predicate = baseCallback['default'](predicate, thisArg, 3);
      return baseFindIndex['default'](array, predicate, fromRight);
    };
  }

  exports['default'] = createFindIndex;

});