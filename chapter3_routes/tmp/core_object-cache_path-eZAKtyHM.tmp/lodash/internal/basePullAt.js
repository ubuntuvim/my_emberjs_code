define('lodash/internal/basePullAt', ['exports', 'lodash/internal/isIndex'], function (exports, isIndex) {

  'use strict';

  var arrayProto = Array.prototype;

  /** Native method references. */
  var splice = arrayProto.splice;

  /**
   * The base implementation of `_.pullAt` without support for individual
   * index arguments and capturing the removed elements.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {number[]} indexes The indexes of elements to remove.
   * @returns {Array} Returns `array`.
   */
  function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0;
    while (length--) {
      var index = indexes[length];
      if (index != previous && isIndex['default'](index)) {
        var previous = index;
        splice.call(array, index, 1);
      }
    }
    return array;
  }

  exports['default'] = basePullAt;

});