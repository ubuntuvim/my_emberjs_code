define('lodash/internal/getFuncName', ['exports', 'lodash/internal/realNames'], function (exports, realNames) {

  'use strict';

  function getFuncName(func) {
    var result = func.name,
        array = realNames['default'][result],
        length = array ? array.length : 0;

    while (length--) {
      var data = array[length],
          otherFunc = data.func;
      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }
    return result;
  }

  exports['default'] = getFuncName;

});