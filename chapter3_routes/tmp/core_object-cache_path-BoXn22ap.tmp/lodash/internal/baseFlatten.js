define('lodash/internal/baseFlatten', ['exports', 'lodash/internal/arrayPush', 'lodash/lang/isArguments', 'lodash/lang/isArray', 'lodash/internal/isArrayLike', 'lodash/internal/isObjectLike'], function (exports, arrayPush, isArguments, isArray, isArrayLike, isObjectLike) {

  'use strict';

  function baseFlatten(array, isDeep, isStrict, result) {
    result || (result = []);

    var index = -1,
        length = array.length;

    while (++index < length) {
      var value = array[index];
      if (isObjectLike['default'](value) && isArrayLike['default'](value) && (isStrict || isArray['default'](value) || isArguments['default'](value))) {
        if (isDeep) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, isDeep, isStrict, result);
        } else {
          arrayPush['default'](result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  exports['default'] = baseFlatten;

});