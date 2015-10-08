define('lodash/internal/isArrayLike', ['exports', 'lodash/internal/getLength', 'lodash/internal/isLength'], function (exports, getLength, isLength) {

  'use strict';

  function isArrayLike(value) {
    return value != null && isLength['default'](getLength['default'](value));
  }

  exports['default'] = isArrayLike;

});