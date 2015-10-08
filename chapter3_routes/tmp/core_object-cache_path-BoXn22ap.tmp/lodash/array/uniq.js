define('lodash/array/uniq', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseUniq', 'lodash/internal/isIterateeCall', 'lodash/internal/sortedUniq'], function (exports, baseCallback, baseUniq, isIterateeCall, sortedUniq) {

  'use strict';

  function uniq(array, isSorted, iteratee, thisArg) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (isSorted != null && typeof isSorted != 'boolean') {
      thisArg = iteratee;
      iteratee = isIterateeCall['default'](array, isSorted, thisArg) ? undefined : isSorted;
      isSorted = false;
    }
    iteratee = iteratee == null ? iteratee : baseCallback['default'](iteratee, thisArg, 3);
    return isSorted ? sortedUniq['default'](array, iteratee) : baseUniq['default'](array, iteratee);
  }

  exports['default'] = uniq;

});