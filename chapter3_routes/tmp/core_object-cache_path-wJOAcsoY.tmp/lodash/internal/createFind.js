define('lodash/internal/createFind', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseFind', 'lodash/internal/baseFindIndex', 'lodash/lang/isArray'], function (exports, baseCallback, baseFind, baseFindIndex, isArray) {

  'use strict';

  function createFind(eachFunc, fromRight) {
    return function (collection, predicate, thisArg) {
      predicate = baseCallback['default'](predicate, thisArg, 3);
      if (isArray['default'](collection)) {
        var index = baseFindIndex['default'](collection, predicate, fromRight);
        return index > -1 ? collection[index] : undefined;
      }
      return baseFind['default'](collection, predicate, eachFunc);
    };
  }

  exports['default'] = createFind;

});