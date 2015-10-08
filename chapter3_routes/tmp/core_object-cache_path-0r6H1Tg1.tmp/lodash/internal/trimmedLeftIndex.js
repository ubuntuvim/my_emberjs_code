define('lodash/internal/trimmedLeftIndex', ['exports', 'lodash/internal/isSpace'], function (exports, isSpace) {

  'use strict';

  function trimmedLeftIndex(string) {
    var index = -1,
        length = string.length;

    while (++index < length && isSpace['default'](string.charCodeAt(index))) {}
    return index;
  }

  exports['default'] = trimmedLeftIndex;

});