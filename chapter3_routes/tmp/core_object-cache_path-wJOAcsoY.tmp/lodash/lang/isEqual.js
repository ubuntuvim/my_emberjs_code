define('lodash/lang/isEqual', ['exports', 'lodash/internal/baseIsEqual', 'lodash/internal/bindCallback'], function (exports, baseIsEqual, bindCallback) {

  'use strict';

  function isEqual(value, other, customizer, thisArg) {
    customizer = typeof customizer == 'function' ? bindCallback['default'](customizer, thisArg, 3) : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual['default'](value, other, customizer) : !!result;
  }

  exports['default'] = isEqual;

});