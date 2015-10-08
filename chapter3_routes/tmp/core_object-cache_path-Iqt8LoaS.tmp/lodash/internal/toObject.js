define('lodash/internal/toObject', ['exports', 'lodash/lang/isObject'], function (exports, isObject) {

  'use strict';

  function toObject(value) {
    return isObject['default'](value) ? value : Object(value);
  }

  exports['default'] = toObject;

});