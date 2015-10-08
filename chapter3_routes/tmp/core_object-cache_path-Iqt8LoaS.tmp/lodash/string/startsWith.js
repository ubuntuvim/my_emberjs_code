define('lodash/string/startsWith', ['exports', 'lodash/internal/baseToString'], function (exports, baseToString) {

  'use strict';

  var nativeMin = Math.min;

  /**
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to search.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */
  function startsWith(string, target, position) {
    string = baseToString['default'](string);
    position = position == null ? 0 : nativeMin(position < 0 ? 0 : +position || 0, string.length);

    return string.lastIndexOf(target, position) == position;
  }

  exports['default'] = startsWith;

});