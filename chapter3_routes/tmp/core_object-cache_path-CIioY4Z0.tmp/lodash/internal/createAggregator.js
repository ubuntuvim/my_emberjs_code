define('lodash/internal/createAggregator', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseEach', 'lodash/lang/isArray'], function (exports, baseCallback, baseEach, isArray) {

  'use strict';

  function createAggregator(setter, initializer) {
    return function (collection, iteratee, thisArg) {
      var result = initializer ? initializer() : {};
      iteratee = baseCallback['default'](iteratee, thisArg, 3);

      if (isArray['default'](collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          setter(result, value, iteratee(value, index, collection), collection);
        }
      } else {
        baseEach['default'](collection, function (value, key, collection) {
          setter(result, value, iteratee(value, key, collection), collection);
        });
      }
      return result;
    };
  }

  exports['default'] = createAggregator;

});