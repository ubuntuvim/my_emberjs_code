define('lodash/internal/createAssigner', ['exports', 'lodash/internal/bindCallback', 'lodash/internal/isIterateeCall', 'lodash/function/restParam'], function (exports, bindCallback, isIterateeCall, restParam) {

  'use strict';

  function createAssigner(assigner) {
    return restParam['default'](function (object, sources) {
      var index = -1,
          length = object == null ? 0 : sources.length,
          customizer = length > 2 ? sources[length - 2] : undefined,
          guard = length > 2 ? sources[2] : undefined,
          thisArg = length > 1 ? sources[length - 1] : undefined;

      if (typeof customizer == 'function') {
        customizer = bindCallback['default'](customizer, thisArg, 5);
        length -= 2;
      } else {
        customizer = typeof thisArg == 'function' ? thisArg : undefined;
        length -= customizer ? 1 : 0;
      }
      if (guard && isIterateeCall['default'](sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, customizer);
        }
      }
      return object;
    });
  }

  exports['default'] = createAssigner;

});