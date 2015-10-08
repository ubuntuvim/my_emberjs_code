define('lodash/internal/pickByArray', ['exports', 'lodash/internal/toObject'], function (exports, toObject) {

  'use strict';

  function pickByArray(object, props) {
    object = toObject['default'](object);

    var index = -1,
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index];
      if (key in object) {
        result[key] = object[key];
      }
    }
    return result;
  }

  exports['default'] = pickByArray;

});