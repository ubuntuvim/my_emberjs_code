define('lodash/utility/propertyOf', ['exports', 'lodash/internal/baseGet', 'lodash/internal/toPath'], function (exports, baseGet, toPath) {

  'use strict';

  function propertyOf(object) {
    return function (path) {
      return baseGet['default'](object, toPath['default'](path), path + '');
    };
  }

  exports['default'] = propertyOf;

});