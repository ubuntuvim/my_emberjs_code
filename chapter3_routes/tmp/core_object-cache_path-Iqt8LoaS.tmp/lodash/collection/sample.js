define('lodash/collection/sample', ['exports', 'lodash/internal/baseRandom', 'lodash/internal/isIterateeCall', 'lodash/lang/toArray', 'lodash/internal/toIterable'], function (exports, baseRandom, isIterateeCall, toArray, toIterable) {

  'use strict';

  var nativeMin = Math.min;

  /**
   * Gets a random element or `n` random elements from a collection.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to sample.
   * @param {number} [n] The number of elements to sample.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {*} Returns the random sample(s).
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   *
   * _.sample([1, 2, 3, 4], 2);
   * // => [3, 1]
   */
  function sample(collection, n, guard) {
    if (guard ? isIterateeCall['default'](collection, n, guard) : n == null) {
      collection = toIterable['default'](collection);
      var length = collection.length;
      return length > 0 ? collection[baseRandom['default'](0, length - 1)] : undefined;
    }
    var index = -1,
        result = toArray['default'](collection),
        length = result.length,
        lastIndex = length - 1;

    n = nativeMin(n < 0 ? 0 : +n || 0, length);
    while (++index < n) {
      var rand = baseRandom['default'](index, lastIndex),
          value = result[rand];

      result[rand] = result[index];
      result[index] = value;
    }
    result.length = n;
    return result;
  }

  exports['default'] = sample;

});