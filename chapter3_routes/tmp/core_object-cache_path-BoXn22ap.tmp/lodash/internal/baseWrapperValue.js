define('lodash/internal/baseWrapperValue', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/arrayPush'], function (exports, LazyWrapper, arrayPush) {

  'use strict';

  function baseWrapperValue(value, actions) {
    var result = value;
    if (result instanceof LazyWrapper['default']) {
      result = result.value();
    }
    var index = -1,
        length = actions.length;

    while (++index < length) {
      var action = actions[index];
      result = action.func.apply(action.thisArg, arrayPush['default']([result], action.args));
    }
    return result;
  }

  exports['default'] = baseWrapperValue;

});