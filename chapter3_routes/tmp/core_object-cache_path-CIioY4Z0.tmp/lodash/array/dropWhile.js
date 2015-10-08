define('lodash/array/dropWhile', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseWhile'], function (exports, baseCallback, baseWhile) {

  'use strict';

  function dropWhile(array, predicate, thisArg) {
    return array && array.length ? baseWhile['default'](array, baseCallback['default'](predicate, thisArg, 3), true) : [];
  }

  exports['default'] = dropWhile;

});