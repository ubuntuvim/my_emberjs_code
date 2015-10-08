define('lodash/collection/shuffle', ['exports', 'lodash/collection/sample'], function (exports, sample) {

  'use strict';

  var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

  /**
   * Creates an array of shuffled values, using a version of the
   * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   * @example
   *
   * _.shuffle([1, 2, 3, 4]);
   * // => [4, 1, 3, 2]
   */
  function shuffle(collection) {
    return sample['default'](collection, POSITIVE_INFINITY);
  }

  exports['default'] = shuffle;

});