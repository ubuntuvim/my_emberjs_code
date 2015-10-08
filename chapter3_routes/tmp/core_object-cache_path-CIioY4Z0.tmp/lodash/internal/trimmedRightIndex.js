define('lodash/internal/trimmedRightIndex', ['exports', 'lodash/internal/isSpace'], function (exports, isSpace) {

  'use strict';

  function trimmedRightIndex(string) {
    var index = string.length;

    while (index-- && isSpace['default'](string.charCodeAt(index))) {}
    return index;
  }

  exports['default'] = trimmedRightIndex;

});