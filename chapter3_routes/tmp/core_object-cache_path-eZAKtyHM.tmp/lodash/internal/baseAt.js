define('lodash/internal/baseAt', ['exports', 'lodash/internal/isArrayLike', 'lodash/internal/isIndex'], function (exports, isArrayLike, isIndex) {

  'use strict';

  function baseAt(collection, props) {
    var index = -1,
        isNil = collection == null,
        isArr = !isNil && isArrayLike['default'](collection),
        length = isArr ? collection.length : 0,
        propsLength = props.length,
        result = Array(propsLength);

    while (++index < propsLength) {
      var key = props[index];
      if (isArr) {
        result[index] = isIndex['default'](key, length) ? collection[key] : undefined;
      } else {
        result[index] = isNil ? undefined : collection[key];
      }
    }
    return result;
  }

  exports['default'] = baseAt;

});