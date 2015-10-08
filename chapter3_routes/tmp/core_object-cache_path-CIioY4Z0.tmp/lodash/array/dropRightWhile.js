define('lodash/array/dropRightWhile', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseWhile'], function (exports, baseCallback, baseWhile) {

  'use strict';

  function dropRightWhile(array, predicate, thisArg) {
    return array && array.length ? baseWhile['default'](array, baseCallback['default'](predicate, thisArg, 3), true, true) : [];
  }

  exports['default'] = dropRightWhile;

});