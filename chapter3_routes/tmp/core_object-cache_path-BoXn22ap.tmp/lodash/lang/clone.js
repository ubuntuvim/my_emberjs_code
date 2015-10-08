define('lodash/lang/clone', ['exports', 'lodash/internal/baseClone', 'lodash/internal/bindCallback', 'lodash/internal/isIterateeCall'], function (exports, baseClone, bindCallback, isIterateeCall) {

  'use strict';

  function clone(value, isDeep, customizer, thisArg) {
    if (isDeep && typeof isDeep != 'boolean' && isIterateeCall['default'](value, isDeep, customizer)) {
      isDeep = false;
    } else if (typeof isDeep == 'function') {
      thisArg = customizer;
      customizer = isDeep;
      isDeep = false;
    }
    return typeof customizer == 'function' ? baseClone['default'](value, isDeep, bindCallback['default'](customizer, thisArg, 1)) : baseClone['default'](value, isDeep);
  }

  exports['default'] = clone;

});