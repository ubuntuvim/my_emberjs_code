define('lodash/internal/baseForIn', ['exports', 'lodash/internal/baseFor', 'lodash/object/keysIn'], function (exports, baseFor, keysIn) {

  'use strict';

  function baseForIn(object, iteratee) {
    return baseFor['default'](object, iteratee, keysIn['default']);
  }

  exports['default'] = baseForIn;

});