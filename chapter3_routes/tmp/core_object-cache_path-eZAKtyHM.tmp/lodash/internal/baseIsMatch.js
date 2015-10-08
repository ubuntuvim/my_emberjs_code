define('lodash/internal/baseIsMatch', ['exports', 'lodash/internal/baseIsEqual', 'lodash/internal/toObject'], function (exports, baseIsEqual, toObject) {

  'use strict';

  function baseIsMatch(object, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = toObject['default'](object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var result = customizer ? customizer(objValue, srcValue, key) : undefined;
        if (!(result === undefined ? baseIsEqual['default'](srcValue, objValue, customizer, true) : result)) {
          return false;
        }
      }
    }
    return true;
  }

  exports['default'] = baseIsMatch;

});