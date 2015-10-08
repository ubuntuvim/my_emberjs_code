define('lodash/array/unzipWith', ['exports', 'lodash/internal/arrayMap', 'lodash/internal/arrayReduce', 'lodash/internal/bindCallback', 'lodash/array/unzip'], function (exports, arrayMap, arrayReduce, bindCallback, unzip) {

  'use strict';

  function unzipWith(array, iteratee, thisArg) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    var result = unzip['default'](array);
    if (iteratee == null) {
      return result;
    }
    iteratee = bindCallback['default'](iteratee, thisArg, 4);
    return arrayMap['default'](result, function (group) {
      return arrayReduce['default'](group, iteratee, undefined, true);
    });
  }

  exports['default'] = unzipWith;

});