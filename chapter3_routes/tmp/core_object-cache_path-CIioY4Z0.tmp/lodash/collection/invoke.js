define('lodash/collection/invoke', ['exports', 'lodash/internal/baseEach', 'lodash/internal/invokePath', 'lodash/internal/isArrayLike', 'lodash/internal/isKey', 'lodash/function/restParam'], function (exports, baseEach, invokePath, isArrayLike, isKey, restParam) {

  'use strict';

  var invoke = restParam['default'](function (collection, path, args) {
    var index = -1,
        isFunc = typeof path == 'function',
        isProp = isKey['default'](path),
        result = isArrayLike['default'](collection) ? Array(collection.length) : [];

    baseEach['default'](collection, function (value) {
      var func = isFunc ? path : isProp && value != null ? value[path] : undefined;
      result[++index] = func ? func.apply(value, args) : invokePath['default'](value, path, args);
    });
    return result;
  });

  exports['default'] = invoke;

});