define('lodash/internal/assignWith', ['exports', 'lodash/object/keys'], function (exports, keys) {

  'use strict';

  function assignWith(object, source, customizer) {
    var index = -1,
        props = keys['default'](source),
        length = props.length;

    while (++index < length) {
      var key = props[index],
          value = object[key],
          result = customizer(value, source[key], key, object, source);

      if ((result === result ? result !== value : value === value) || value === undefined && !(key in object)) {
        object[key] = result;
      }
    }
    return object;
  }

  exports['default'] = assignWith;

});