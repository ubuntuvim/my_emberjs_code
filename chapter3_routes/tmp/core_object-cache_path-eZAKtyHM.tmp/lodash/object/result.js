define('lodash/object/result', ['exports', 'lodash/internal/baseGet', 'lodash/internal/baseSlice', 'lodash/lang/isFunction', 'lodash/internal/isKey', 'lodash/array/last', 'lodash/internal/toPath'], function (exports, baseGet, baseSlice, isFunction, isKey, last, toPath) {

  'use strict';

  function result(object, path, defaultValue) {
    var result = object == null ? undefined : object[path];
    if (result === undefined) {
      if (object != null && !isKey['default'](path, object)) {
        path = toPath['default'](path);
        object = path.length == 1 ? object : baseGet['default'](object, baseSlice['default'](path, 0, -1));
        result = object == null ? undefined : object[last['default'](path)];
      }
      result = result === undefined ? defaultValue : result;
    }
    return isFunction['default'](result) ? result.call(object) : result;
  }

  exports['default'] = result;

});