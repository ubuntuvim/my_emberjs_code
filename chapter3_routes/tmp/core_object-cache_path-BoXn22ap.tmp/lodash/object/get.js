define('lodash/object/get', ['exports', 'lodash/internal/baseGet', 'lodash/internal/toPath'], function (exports, baseGet, toPath) {

  'use strict';

  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet['default'](object, toPath['default'](path), path + '');
    return result === undefined ? defaultValue : result;
  }

  exports['default'] = get;

});