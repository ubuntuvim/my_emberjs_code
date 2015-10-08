define('lodash/internal/baseIsEqual', ['exports', 'lodash/internal/baseIsEqualDeep', 'lodash/lang/isObject', 'lodash/internal/isObjectLike'], function (exports, baseIsEqualDeep, isObject, isObjectLike) {

  'use strict';

  function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObject['default'](value) && !isObjectLike['default'](other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep['default'](value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
  }

  exports['default'] = baseIsEqual;

});