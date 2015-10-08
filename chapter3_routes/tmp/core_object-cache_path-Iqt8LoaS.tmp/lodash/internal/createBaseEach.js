define('lodash/internal/createBaseEach', ['exports', 'lodash/internal/getLength', 'lodash/internal/isLength', 'lodash/internal/toObject'], function (exports, getLength, isLength, toObject) {

  'use strict';

  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      var length = collection ? getLength['default'](collection) : 0;
      if (!isLength['default'](length)) {
        return eachFunc(collection, iteratee);
      }
      var index = fromRight ? length : -1,
          iterable = toObject['default'](collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  exports['default'] = createBaseEach;

});