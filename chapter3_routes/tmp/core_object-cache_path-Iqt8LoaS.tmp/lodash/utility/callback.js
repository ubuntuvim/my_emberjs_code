define('lodash/utility/callback', ['exports', 'lodash/internal/baseCallback', 'lodash/internal/isIterateeCall', 'lodash/internal/isObjectLike', 'lodash/utility/matches'], function (exports, baseCallback, isIterateeCall, isObjectLike, matches) {

  'use strict';

  function callback(func, thisArg, guard) {
    if (guard && isIterateeCall['default'](func, thisArg, guard)) {
      thisArg = undefined;
    }
    return isObjectLike['default'](func) ? matches['default'](func) : baseCallback['default'](func, thisArg);
  }

  exports['default'] = callback;

});