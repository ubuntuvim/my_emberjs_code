define('lodash/internal/baseDifference', ['exports', 'lodash/internal/baseIndexOf', 'lodash/internal/cacheIndexOf', 'lodash/internal/createCache'], function (exports, baseIndexOf, cacheIndexOf, createCache) {

  'use strict';

  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.difference` which accepts a single array
   * of values to exclude.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   */
  function baseDifference(array, values) {
    var length = array ? array.length : 0,
        result = [];

    if (!length) {
      return result;
    }
    var index = -1,
        indexOf = baseIndexOf['default'],
        isCommon = true,
        cache = isCommon && values.length >= LARGE_ARRAY_SIZE ? createCache['default'](values) : null,
        valuesLength = values.length;

    if (cache) {
      indexOf = cacheIndexOf['default'];
      isCommon = false;
      values = cache;
    }
    outer: while (++index < length) {
      var value = array[index];

      if (isCommon && value === value) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === value) {
            continue outer;
          }
        }
        result.push(value);
      } else if (indexOf(values, value, 0) < 0) {
        result.push(value);
      }
    }
    return result;
  }

  exports['default'] = baseDifference;

});