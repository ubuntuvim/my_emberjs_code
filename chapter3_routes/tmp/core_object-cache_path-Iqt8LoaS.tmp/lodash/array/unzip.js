define('lodash/array/unzip', ['exports', 'lodash/internal/arrayFilter', 'lodash/internal/arrayMap', 'lodash/internal/baseProperty', 'lodash/internal/isArrayLike'], function (exports, arrayFilter, arrayMap, baseProperty, isArrayLike) {

  'use strict';

  var nativeMax = Math.max;

  /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-zip
   * configuration.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
   * // => [['fred', 30, true], ['barney', 40, false]]
   *
   * _.unzip(zipped);
   * // => [['fred', 'barney'], [30, 40], [true, false]]
   */
  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }
    var index = -1,
        length = 0;

    array = arrayFilter['default'](array, function (group) {
      if (isArrayLike['default'](group)) {
        length = nativeMax(group.length, length);
        return true;
      }
    });
    var result = Array(length);
    while (++index < length) {
      result[index] = arrayMap['default'](array, baseProperty['default'](index));
    }
    return result;
  }

  exports['default'] = unzip;

});