define('lodash/internal/pickByCallback', ['exports', 'lodash/internal/baseForIn'], function (exports, baseForIn) {

  'use strict';

  function pickByCallback(object, predicate) {
    var result = {};
    baseForIn['default'](object, function (value, key, object) {
      if (predicate(value, key, object)) {
        result[key] = value;
      }
    });
    return result;
  }

  exports['default'] = pickByCallback;

});