define('lodash/utility/property', ['exports', 'lodash/internal/baseProperty', 'lodash/internal/basePropertyDeep', 'lodash/internal/isKey'], function (exports, baseProperty, basePropertyDeep, isKey) {

  'use strict';

  function property(path) {
    return isKey['default'](path) ? baseProperty['default'](path) : basePropertyDeep['default'](path);
  }

  exports['default'] = property;

});