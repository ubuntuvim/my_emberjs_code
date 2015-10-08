define('lodash/lang/isElement', ['exports', 'lodash/internal/isObjectLike', 'lodash/lang/isPlainObject'], function (exports, isObjectLike, isPlainObject) {

  'use strict';

  function isElement(value) {
    return !!value && value.nodeType === 1 && isObjectLike['default'](value) && !isPlainObject['default'](value);
  }

  exports['default'] = isElement;

});