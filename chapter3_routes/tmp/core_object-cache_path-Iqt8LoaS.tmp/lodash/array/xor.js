define('lodash/array/xor', ['exports', 'lodash/internal/arrayPush', 'lodash/internal/baseDifference', 'lodash/internal/baseUniq', 'lodash/internal/isArrayLike'], function (exports, arrayPush, baseDifference, baseUniq, isArrayLike) {

  'use strict';

  function xor() {
    var index = -1,
        length = arguments.length;

    while (++index < length) {
      var array = arguments[index];
      if (isArrayLike['default'](array)) {
        var result = result ? arrayPush['default'](baseDifference['default'](result, array), baseDifference['default'](array, result)) : array;
      }
    }
    return result ? baseUniq['default'](result) : [];
  }

  exports['default'] = xor;

});