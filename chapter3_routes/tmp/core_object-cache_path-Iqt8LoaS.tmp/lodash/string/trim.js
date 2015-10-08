define('lodash/string/trim', ['exports', 'lodash/internal/baseToString', 'lodash/internal/charsLeftIndex', 'lodash/internal/charsRightIndex', 'lodash/internal/isIterateeCall', 'lodash/internal/trimmedLeftIndex', 'lodash/internal/trimmedRightIndex'], function (exports, baseToString, charsLeftIndex, charsRightIndex, isIterateeCall, trimmedLeftIndex, trimmedRightIndex) {

  'use strict';

  function trim(string, chars, guard) {
    var value = string;
    string = baseToString['default'](string);
    if (!string) {
      return string;
    }
    if (guard ? isIterateeCall['default'](value, chars, guard) : chars == null) {
      return string.slice(trimmedLeftIndex['default'](string), trimmedRightIndex['default'](string) + 1);
    }
    chars = chars + '';
    return string.slice(charsLeftIndex['default'](string, chars), charsRightIndex['default'](string, chars) + 1);
  }

  exports['default'] = trim;

});