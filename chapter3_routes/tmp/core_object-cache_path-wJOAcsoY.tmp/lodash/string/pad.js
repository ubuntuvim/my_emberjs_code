define('lodash/string/pad', ['exports', 'lodash/internal/baseToString', 'lodash/internal/createPadding', 'lodash/internal/root'], function (exports, baseToString, createPadding, root) {

  'use strict';

  var nativeCeil = Math.ceil,
      nativeFloor = Math.floor,
      nativeIsFinite = root['default'].isFinite;

  /**
   * Pads `string` on the left and right sides if it's shorter than `length`.
   * Padding characters are truncated if they can't be evenly divided by `length`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.pad('abc', 8);
   * // => '  abc   '
   *
   * _.pad('abc', 8, '_-');
   * // => '_-abc_-_'
   *
   * _.pad('abc', 3);
   * // => 'abc'
   */
  function pad(string, length, chars) {
    string = baseToString['default'](string);
    length = +length;

    var strLength = string.length;
    if (strLength >= length || !nativeIsFinite(length)) {
      return string;
    }
    var mid = (length - strLength) / 2,
        leftLength = nativeFloor(mid),
        rightLength = nativeCeil(mid);

    chars = createPadding['default']('', rightLength, chars);
    return chars.slice(0, leftLength) + string + chars;
  }

  exports['default'] = pad;

});