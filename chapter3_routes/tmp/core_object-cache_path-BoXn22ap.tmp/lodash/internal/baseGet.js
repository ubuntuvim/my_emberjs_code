define('lodash/internal/baseGet', ['exports', 'lodash/internal/toObject'], function (exports, toObject) {

  'use strict';

  function baseGet(object, path, pathKey) {
    if (object == null) {
      return;
    }
    if (pathKey !== undefined && pathKey in toObject['default'](object)) {
      path = [pathKey];
    }
    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return index && index == length ? object : undefined;
  }

  exports['default'] = baseGet;

});