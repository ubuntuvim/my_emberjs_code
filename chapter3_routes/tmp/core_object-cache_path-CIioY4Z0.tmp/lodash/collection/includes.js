define('lodash/collection/includes', ['exports', 'lodash/internal/baseIndexOf', 'lodash/internal/getLength', 'lodash/lang/isArray', 'lodash/internal/isIterateeCall', 'lodash/internal/isLength', 'lodash/lang/isString', 'lodash/object/values'], function (exports, baseIndexOf, getLength, isArray, isIterateeCall, isLength, isString, values) {

  'use strict';

  var nativeMax = Math.max;

  /**
   * Checks if `value` is in `collection` using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons. If `fromIndex` is negative, it is used as the offset
   * from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @alias contains, include
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {*} target The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
   * @returns {boolean} Returns `true` if a matching element is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
   * // => true
   *
   * _.includes('pebbles', 'eb');
   * // => true
   */
  function includes(collection, target, fromIndex, guard) {
    var length = collection ? getLength['default'](collection) : 0;
    if (!isLength['default'](length)) {
      collection = values['default'](collection);
      length = collection.length;
    }
    if (typeof fromIndex != 'number' || guard && isIterateeCall['default'](target, fromIndex, guard)) {
      fromIndex = 0;
    } else {
      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex || 0;
    }
    return typeof collection == 'string' || !isArray['default'](collection) && isString['default'](collection) ? fromIndex <= length && collection.indexOf(target, fromIndex) > -1 : !!length && baseIndexOf['default'](collection, target, fromIndex) > -1;
  }

  exports['default'] = includes;

});