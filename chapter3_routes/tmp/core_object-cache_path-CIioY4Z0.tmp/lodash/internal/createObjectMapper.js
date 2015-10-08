define('lodash/internal/createObjectMapper', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseForOwn'], function (exports, baseCallback, baseForOwn) {

  'use strict';

  function createObjectMapper(isMapKeys) {
    return function (object, iteratee, thisArg) {
      var result = {};
      iteratee = baseCallback['default'](iteratee, thisArg, 3);

      baseForOwn['default'](object, function (value, key, object) {
        var mapped = iteratee(value, key, object);
        key = isMapKeys ? mapped : key;
        value = isMapKeys ? value : mapped;
        result[key] = value;
      });
      return result;
    };
  }

  exports['default'] = createObjectMapper;

});