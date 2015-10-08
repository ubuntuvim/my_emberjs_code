define('lodash/array/takeRightWhile', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/baseWhile'], function (exports, baseCallback, baseWhile) {

  'use strict';

  function takeRightWhile(array, predicate, thisArg) {
    return array && array.length ? baseWhile['default'](array, baseCallback['default'](predicate, thisArg, 3), false, true) : [];
  }

  exports['default'] = takeRightWhile;

});