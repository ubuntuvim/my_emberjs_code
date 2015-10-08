define('lodash/lang/toArray', ['exports', 'lodash/internal/arrayCopy', 'lodash/internal/getLength', 'lodash/internal/isLength', 'lodash/object/values'], function (exports, arrayCopy, getLength, isLength, values) {

  'use strict';

  function toArray(value) {
    var length = value ? getLength['default'](value) : 0;
    if (!isLength['default'](length)) {
      return values['default'](value);
    }
    if (!length) {
      return [];
    }
    return arrayCopy['default'](value);
  }

  exports['default'] = toArray;

});