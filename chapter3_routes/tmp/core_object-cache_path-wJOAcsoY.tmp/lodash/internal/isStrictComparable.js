define('lodash/internal/isStrictComparable', ['exports', 'lodash/lang/isObject'], function (exports, isObject) {

  'use strict';

  function isStrictComparable(value) {
    return value === value && !isObject['default'](value);
  }

  exports['default'] = isStrictComparable;

});