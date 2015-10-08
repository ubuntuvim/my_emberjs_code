define('lodash/internal/createPadDir', ['exports', 'lodash/internal/baseToString', 'lodash/internal/createPadding'], function (exports, baseToString, createPadding) {

  'use strict';

  function createPadDir(fromRight) {
    return function (string, length, chars) {
      string = baseToString['default'](string);
      return (fromRight ? string : '') + createPadding['default'](string, length, chars) + (fromRight ? '' : string);
    };
  }

  exports['default'] = createPadDir;

});