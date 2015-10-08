define('lodash/lang/toPlainObject', ['exports', 'lodash/internal/baseCopy', 'lodash/object/keysIn'], function (exports, baseCopy, keysIn) {

  'use strict';

  function toPlainObject(value) {
    return baseCopy['default'](value, keysIn['default'](value));
  }

  exports['default'] = toPlainObject;

});