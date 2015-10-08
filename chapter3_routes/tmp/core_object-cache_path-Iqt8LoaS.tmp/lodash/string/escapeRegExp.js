define('lodash/string/escapeRegExp', ['exports', 'lodash/internal/baseToString', 'lodash/internal/escapeRegExpChar'], function (exports, baseToString, escapeRegExpChar) {

  'use strict';

  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);

  /**
   * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
   * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escapeRegExp('[lodash](https://lodash.com/)');
   * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
   */
  function escapeRegExp(string) {
    string = baseToString['default'](string);
    return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, escapeRegExpChar['default']) : string || '(?:)';
  }

  exports['default'] = escapeRegExp;

});