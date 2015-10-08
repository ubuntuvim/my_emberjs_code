define('lodash/internal/baseForOwn', ['exports', 'lodash/internal/baseFor', 'lodash/object/keys'], function (exports, baseFor, keys) {

  'use strict';

  function baseForOwn(object, iteratee) {
    return baseFor['default'](object, iteratee, keys['default']);
  }

  exports['default'] = baseForOwn;

});