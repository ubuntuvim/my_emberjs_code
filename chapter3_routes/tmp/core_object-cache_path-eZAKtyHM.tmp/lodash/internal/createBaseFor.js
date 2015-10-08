define('lodash/internal/createBaseFor', ['exports', 'lodash/internal/toObject'], function (exports, toObject) {

  'use strict';

  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var iterable = toObject['default'](object),
          props = keysFunc(object),
          length = props.length,
          index = fromRight ? length : -1;

      while (fromRight ? index-- : ++index < length) {
        var key = props[index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  exports['default'] = createBaseFor;

});