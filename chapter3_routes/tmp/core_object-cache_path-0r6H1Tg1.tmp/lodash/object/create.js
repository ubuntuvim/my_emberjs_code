define('lodash/object/create', ['exports', 'lodash/internal/baseAssign', 'lodash/internal/baseCreate', 'lodash/internal/isIterateeCall'], function (exports, baseAssign, baseCreate, isIterateeCall) {

  'use strict';

  function create(prototype, properties, guard) {
    var result = baseCreate['default'](prototype);
    if (guard && isIterateeCall['default'](prototype, properties, guard)) {
      properties = undefined;
    }
    return properties ? baseAssign['default'](result, properties) : result;
  }

  exports['default'] = create;

});