define('lodash/internal/isIterateeCall', ['exports', 'lodash/internal/isArrayLike', 'lodash/internal/isIndex', 'lodash/lang/isObject'], function (exports, isArrayLike, isIndex, isObject) {

  'use strict';

  function isIterateeCall(value, index, object) {
    if (!isObject['default'](object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike['default'](object) && isIndex['default'](index, object.length) : type == 'string' && index in object) {
      var other = object[index];
      return value === value ? value === other : other !== other;
    }
    return false;
  }

  exports['default'] = isIterateeCall;

});