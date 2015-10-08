define('lodash/array/takeWhile', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseWhile'], function (exports, baseCallback, baseWhile) {

  'use strict';

  function takeWhile(array, predicate, thisArg) {
    return array && array.length ? baseWhile['default'](array, baseCallback['default'](predicate, thisArg, 3)) : [];
  }

  exports['default'] = takeWhile;

});