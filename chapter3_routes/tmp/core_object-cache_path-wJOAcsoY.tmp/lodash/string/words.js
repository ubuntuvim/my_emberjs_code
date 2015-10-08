define('lodash/string/words', ['exports', 'lodash/internal/baseToString', 'lodash/internal/isIterateeCall'], function (exports, baseToString, isIterateeCall) {

  'use strict';

  var reWords = (function () {
    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
  })();

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    if (guard && isIterateeCall['default'](string, pattern, guard)) {
      pattern = undefined;
    }
    string = baseToString['default'](string);
    return string.match(pattern || reWords) || [];
  }

  exports['default'] = words;

});