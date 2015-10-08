define('lodash/internal/baseMerge', ['exports', 'lodash/internal/arrayEach', 'lodash/internal/baseMergeDeep', 'lodash/lang/isArray', 'lodash/internal/isArrayLike', 'lodash/lang/isObject', 'lodash/internal/isObjectLike', 'lodash/lang/isTypedArray', 'lodash/object/keys'], function (exports, arrayEach, baseMergeDeep, isArray, isArrayLike, isObject, isObjectLike, isTypedArray, keys) {

  'use strict';

  function baseMerge(object, source, customizer, stackA, stackB) {
    if (!isObject['default'](object)) {
      return object;
    }
    var isSrcArr = isArrayLike['default'](source) && (isArray['default'](source) || isTypedArray['default'](source)),
        props = isSrcArr ? undefined : keys['default'](source);

    arrayEach['default'](props || source, function (srcValue, key) {
      if (props) {
        key = srcValue;
        srcValue = source[key];
      }
      if (isObjectLike['default'](srcValue)) {
        stackA || (stackA = []);
        stackB || (stackB = []);
        baseMergeDeep['default'](object, source, key, baseMerge, customizer, stackA, stackB);
      } else {
        var value = object[key],
            result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
            isCommon = result === undefined;

        if (isCommon) {
          result = srcValue;
        }
        if ((result !== undefined || isSrcArr && !(key in object)) && (isCommon || (result === result ? result !== value : value === value))) {
          object[key] = result;
        }
      }
    });
    return object;
  }

  exports['default'] = baseMerge;

});