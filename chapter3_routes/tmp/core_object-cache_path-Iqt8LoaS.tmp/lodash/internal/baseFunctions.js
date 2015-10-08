define('lodash/internal/baseFunctions', ['exports', 'lodash/lang/isFunction'], function (exports, isFunction) {

  'use strict';

  function baseFunctions(object, props) {
    var index = -1,
        length = props.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      var key = props[index];
      if (isFunction['default'](object[key])) {
        result[++resIndex] = key;
      }
    }
    return result;
  }

  exports['default'] = baseFunctions;

});