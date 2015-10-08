define('lodash/object/set', ['exports', 'lodash/internal/isIndex', 'lodash/internal/isKey', 'lodash/lang/isObject', 'lodash/internal/toPath'], function (exports, isIndex, isKey, isObject, toPath) {

  'use strict';

  function set(object, path, value) {
    if (object == null) {
      return object;
    }
    var pathKey = path + '';
    path = object[pathKey] != null || isKey['default'](path, object) ? [pathKey] : toPath['default'](path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = path[index];
      if (isObject['default'](nested)) {
        if (index == lastIndex) {
          nested[key] = value;
        } else if (nested[key] == null) {
          nested[key] = isIndex['default'](path[index + 1]) ? [] : {};
        }
      }
      nested = nested[key];
    }
    return object;
  }

  exports['default'] = set;

});