define('lodash/lang/isEmpty', ['exports', 'lodash/lang/isArguments', 'lodash/lang/isArray', 'lodash/internal/isArrayLike', 'lodash/lang/isFunction', 'lodash/internal/isObjectLike', 'lodash/lang/isString', 'lodash/object/keys'], function (exports, isArguments, isArray, isArrayLike, isFunction, isObjectLike, isString, keys) {

  'use strict';

  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike['default'](value) && (isArray['default'](value) || isString['default'](value) || isArguments['default'](value) || isObjectLike['default'](value) && isFunction['default'](value.splice))) {
      return !value.length;
    }
    return !keys['default'](value).length;
  }

  exports['default'] = isEmpty;

});