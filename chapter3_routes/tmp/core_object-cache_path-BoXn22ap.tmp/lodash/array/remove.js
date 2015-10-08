define('lodash/array/remove', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/basePullAt'], function (exports, baseCallback, basePullAt) {

  'use strict';

  function remove(array, predicate, thisArg) {
    var result = [];
    if (!(array && array.length)) {
      return result;
    }
    var index = -1,
        indexes = [],
        length = array.length;

    predicate = baseCallback['default'](predicate, thisArg, 3);
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result.push(value);
        indexes.push(index);
      }
    }
    basePullAt['default'](array, indexes);
    return result;
  }

  exports['default'] = remove;

});