define('lodash/internal/baseCallback', ['exports', 'lodash/internal/baseMatches', 'lodash/internal/baseMatchesProperty', 'lodash/internal/bindCallback', 'lodash/utility/identity', 'lodash/utility/property'], function (exports, baseMatches, baseMatchesProperty, bindCallback, identity, property) {

  'use strict';

  function baseCallback(func, thisArg, argCount) {
    var type = typeof func;
    if (type == 'function') {
      return thisArg === undefined ? func : bindCallback['default'](func, thisArg, argCount);
    }
    if (func == null) {
      return identity['default'];
    }
    if (type == 'object') {
      return baseMatches['default'](func);
    }
    return thisArg === undefined ? property['default'](func) : baseMatchesProperty['default'](func, thisArg);
  }

  exports['default'] = baseCallback;

});