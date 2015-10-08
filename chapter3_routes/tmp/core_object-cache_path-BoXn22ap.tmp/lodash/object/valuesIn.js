define('lodash/object/valuesIn', ['exports', 'lodash/internal/baseValues', 'lodash/object/keysIn'], function (exports, baseValues, keysIn) {

  'use strict';

  function valuesIn(object) {
    return baseValues['default'](object, keysIn['default'](object));
  }

  exports['default'] = valuesIn;

});