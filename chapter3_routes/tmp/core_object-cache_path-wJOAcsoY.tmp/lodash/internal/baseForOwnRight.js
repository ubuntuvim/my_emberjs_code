define('lodash/internal/baseForOwnRight', ['exports', 'lodash/internal/baseForRight', 'lodash/object/keys'], function (exports, baseForRight, keys) {

  'use strict';

  function baseForOwnRight(object, iteratee) {
    return baseForRight['default'](object, iteratee, keys['default']);
  }

  exports['default'] = baseForOwnRight;

});