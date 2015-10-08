define('lodash/object/functions', ['exports', 'lodash/internal/baseFunctions', 'lodash/object/keysIn'], function (exports, baseFunctions, keysIn) {

  'use strict';

  function functions(object) {
    return baseFunctions['default'](object, keysIn['default'](object));
  }

  exports['default'] = functions;

});