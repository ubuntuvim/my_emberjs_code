define('lodash/internal/invokePath', ['exports', 'lodash/internal/baseGet', 'lodash/internal/baseSlice', 'lodash/internal/isKey', 'lodash/array/last', 'lodash/internal/toPath'], function (exports, baseGet, baseSlice, isKey, last, toPath) {

  'use strict';

  function invokePath(object, path, args) {
    if (object != null && !isKey['default'](path, object)) {
      path = toPath['default'](path);
      object = path.length == 1 ? object : baseGet['default'](object, baseSlice['default'](path, 0, -1));
      path = last['default'](path);
    }
    var func = object == null ? object : object[path];
    return func == null ? undefined : func.apply(object, args);
  }

  exports['default'] = invokePath;

});