define('lodash/object/pairs', ['exports', 'lodash/object/keys', 'lodash/internal/toObject'], function (exports, keys, toObject) {

  'use strict';

  function pairs(object) {
    object = toObject['default'](object);

    var index = -1,
        props = keys['default'](object),
        length = props.length,
        result = Array(length);

    while (++index < length) {
      var key = props[index];
      result[index] = [key, object[key]];
    }
    return result;
  }

  exports['default'] = pairs;

});