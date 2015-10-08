define('lodash/string/trimRight', ['exports', 'lodash/internal/baseToString', 'lodash/internal/charsRightIndex', 'lodash/internal/isIterateeCall', 'lodash/internal/trimmedRightIndex'], function (exports, baseToString, charsRightIndex, isIterateeCall, trimmedRightIndex) {

  'use strict';

  function trimRight(string, chars, guard) {
    var value = string;
    string = baseToString['default'](string);
    if (!string) {
      return string;
    }
    if (guard ? isIterateeCall['default'](value, chars, guard) : chars == null) {
      return string.slice(0, trimmedRightIndex['default'](string) + 1);
    }
    return string.slice(0, charsRightIndex['default'](string, chars + '') + 1);
  }

  exports['default'] = trimRight;

});