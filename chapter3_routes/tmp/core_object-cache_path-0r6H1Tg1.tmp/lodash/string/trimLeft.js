define('lodash/string/trimLeft', ['exports', 'lodash/internal/baseToString', 'lodash/internal/charsLeftIndex', 'lodash/internal/isIterateeCall', 'lodash/internal/trimmedLeftIndex'], function (exports, baseToString, charsLeftIndex, isIterateeCall, trimmedLeftIndex) {

  'use strict';

  function trimLeft(string, chars, guard) {
    var value = string;
    string = baseToString['default'](string);
    if (!string) {
      return string;
    }
    if (guard ? isIterateeCall['default'](value, chars, guard) : chars == null) {
      return string.slice(trimmedLeftIndex['default'](string));
    }
    return string.slice(charsLeftIndex['default'](string, chars + ''));
  }

  exports['default'] = trimLeft;

});