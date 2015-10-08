define('lodash/internal/baseMergeDeep', ['exports', 'lodash/internal/arrayCopy', 'lodash/lang/isArguments', 'lodash/lang/isArray', 'lodash/internal/isArrayLike', 'lodash/lang/isPlainObject', 'lodash/lang/isTypedArray', 'lodash/lang/toPlainObject'], function (exports, arrayCopy, isArguments, isArray, isArrayLike, isPlainObject, isTypedArray, toPlainObject) {

  'use strict';

  function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
    var length = stackA.length,
        srcValue = source[key];

    while (length--) {
      if (stackA[length] == srcValue) {
        object[key] = stackB[length];
        return;
      }
    }
    var value = object[key],
        result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
        isCommon = result === undefined;

    if (isCommon) {
      result = srcValue;
      if (isArrayLike['default'](srcValue) && (isArray['default'](srcValue) || isTypedArray['default'](srcValue))) {
        result = isArray['default'](value) ? value : isArrayLike['default'](value) ? arrayCopy['default'](value) : [];
      } else if (isPlainObject['default'](srcValue) || isArguments['default'](srcValue)) {
        result = isArguments['default'](value) ? toPlainObject['default'](value) : isPlainObject['default'](value) ? value : {};
      } else {
        isCommon = false;
      }
    }
    // Add the source value to the stack of traversed objects and associate
    // it with its merged value.
    stackA.push(srcValue);
    stackB.push(result);

    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
    } else if (result === result ? result !== value : value === value) {
      object[key] = result;
    }
  }

  exports['default'] = baseMergeDeep;

});