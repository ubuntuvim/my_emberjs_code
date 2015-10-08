define('lodash/internal/toIterable', ['exports', 'lodash/internal/isArrayLike', 'lodash/lang/isObject', 'lodash/object/values'], function (exports, isArrayLike, isObject, values) {

  'use strict';

  function toIterable(value) {
    if (value == null) {
      return [];
    }
    if (!isArrayLike['default'](value)) {
      return values['default'](value);
    }
    return isObject['default'](value) ? value : Object(value);
  }

  exports['default'] = toIterable;

});