define('lodash/internal/basePropertyDeep', ['exports', 'lodash/internal/baseGet', 'lodash/internal/toPath'], function (exports, baseGet, toPath) {

  'use strict';

  function basePropertyDeep(path) {
    var pathKey = path + '';
    path = toPath['default'](path);
    return function (object) {
      return baseGet['default'](object, path, pathKey);
    };
  }

  exports['default'] = basePropertyDeep;

});