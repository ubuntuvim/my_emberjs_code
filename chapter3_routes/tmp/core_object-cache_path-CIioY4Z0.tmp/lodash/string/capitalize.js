define('lodash/string/capitalize', ['exports', 'lodash/internal/baseToString'], function (exports, baseToString) {

  'use strict';

  function capitalize(string) {
    string = baseToString['default'](string);
    return string && string.charAt(0).toUpperCase() + string.slice(1);
  }

  exports['default'] = capitalize;

});