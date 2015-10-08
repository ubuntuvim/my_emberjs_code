define('lodash/lang/cloneDeep', ['exports', 'lodash/internal/baseClone', 'lodash/internal/bindCallback'], function (exports, baseClone, bindCallback) {

  'use strict';

  function cloneDeep(value, customizer, thisArg) {
    return typeof customizer == 'function' ? baseClone['default'](value, true, bindCallback['default'](customizer, thisArg, 1)) : baseClone['default'](value, true);
  }

  exports['default'] = cloneDeep;

});