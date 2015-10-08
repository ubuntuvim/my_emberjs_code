define('lodash/array/intersection', ['exports', 'lodash/internal/baseIndexOf', 'lodash/internal/cacheIndexOf', 'lodash/internal/createCache', 'lodash/internal/isArrayLike', 'lodash/function/restParam'], function (exports, baseIndexOf, cacheIndexOf, createCache, isArrayLike, restParam) {

  'use strict';

  var intersection = restParam['default'](function (arrays) {
    var othLength = arrays.length,
        othIndex = othLength,
        caches = Array(length),
        indexOf = baseIndexOf['default'],
        isCommon = true,
        result = [];

    while (othIndex--) {
      var value = arrays[othIndex] = isArrayLike['default'](value = arrays[othIndex]) ? value : [];
      caches[othIndex] = isCommon && value.length >= 120 ? createCache['default'](othIndex && value) : null;
    }
    var array = arrays[0],
        index = -1,
        length = array ? array.length : 0,
        seen = caches[0];

    outer: while (++index < length) {
      value = array[index];
      if ((seen ? cacheIndexOf['default'](seen, value) : indexOf(result, value, 0)) < 0) {
        var othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if ((cache ? cacheIndexOf['default'](cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(value);
        }
        result.push(value);
      }
    }
    return result;
  });

  exports['default'] = intersection;

});