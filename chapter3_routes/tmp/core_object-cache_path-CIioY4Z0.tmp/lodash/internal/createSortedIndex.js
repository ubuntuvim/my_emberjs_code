define('lodash/internal/createSortedIndex', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/binaryIndex', 'lodash/internal/binaryIndexBy'], function (exports, baseCallback, binaryIndex, binaryIndexBy) {

  'use strict';

  function createSortedIndex(retHighest) {
    return function (array, value, iteratee, thisArg) {
      return iteratee == null ? binaryIndex['default'](array, value, retHighest) : binaryIndexBy['default'](array, value, baseCallback['default'](iteratee, thisArg, 1), retHighest);
    };
  }

  exports['default'] = createSortedIndex;

});