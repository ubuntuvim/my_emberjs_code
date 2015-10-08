define('lodash/object/values', ['exports', 'lodash/internal/baseValues', 'lodash/object/keys'], function (exports, baseValues, keys) {

  'use strict';

  function values(object) {
    return baseValues['default'](object, keys['default'](object));
  }

  exports['default'] = values;

});