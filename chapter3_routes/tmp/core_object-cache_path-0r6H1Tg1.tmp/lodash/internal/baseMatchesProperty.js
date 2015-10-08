define('lodash/internal/baseMatchesProperty', ['exports', 'lodash/internal/baseGet', 'lodash/internal/baseIsEqual', 'lodash/internal/baseSlice', 'lodash/lang/isArray', 'lodash/internal/isKey', 'lodash/internal/isStrictComparable', 'lodash/array/last', 'lodash/internal/toObject', 'lodash/internal/toPath'], function (exports, baseGet, baseIsEqual, baseSlice, isArray, isKey, isStrictComparable, last, toObject, toPath) {

  'use strict';

  function baseMatchesProperty(path, srcValue) {
    var isArr = isArray['default'](path),
        isCommon = isKey['default'](path) && isStrictComparable['default'](srcValue),
        pathKey = path + '';

    path = toPath['default'](path);
    return function (object) {
      if (object == null) {
        return false;
      }
      var key = pathKey;
      object = toObject['default'](object);
      if ((isArr || !isCommon) && !(key in object)) {
        object = path.length == 1 ? object : baseGet['default'](object, baseSlice['default'](path, 0, -1));
        if (object == null) {
          return false;
        }
        key = last['default'](path);
        object = toObject['default'](object);
      }
      return object[key] === srcValue ? srcValue !== undefined || key in object : baseIsEqual['default'](srcValue, object[key], undefined, true);
    };
  }

  exports['default'] = baseMatchesProperty;

});