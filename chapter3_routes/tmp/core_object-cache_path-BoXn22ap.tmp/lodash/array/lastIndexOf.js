define('lodash/array/lastIndexOf', ['exports', 'lodash/internal/binaryIndex', 'lodash/internal/indexOfNaN'], function (exports, binaryIndex, indexOfNaN) {

  'use strict';

  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * This method is like `_.indexOf` except that it iterates over elements of
   * `array` from right to left.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {boolean|number} [fromIndex=array.length-1] The index to search from
   *  or `true` to perform a binary search on a sorted array.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // using `fromIndex`
   * _.lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   *
   * // performing a binary search
   * _.lastIndexOf([1, 1, 2, 2], 2, true);
   * // => 3
   */
  function lastIndexOf(array, value, fromIndex) {
    var length = array ? array.length : 0;
    if (!length) {
      return -1;
    }
    var index = length;
    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
    } else if (fromIndex) {
      index = binaryIndex['default'](array, value, true) - 1;
      var other = array[index];
      if (value === value ? value === other : other !== other) {
        return index;
      }
      return -1;
    }
    if (value !== value) {
      return indexOfNaN['default'](array, index, true);
    }
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  exports['default'] = lastIndexOf;

});