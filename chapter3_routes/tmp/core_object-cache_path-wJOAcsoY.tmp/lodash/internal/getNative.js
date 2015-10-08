define('lodash/internal/getNative', ['exports', 'lodash/lang/isNative'], function (exports, isNative) {

  'use strict';

  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative['default'](value) ? value : undefined;
  }

  exports['default'] = getNative;

});