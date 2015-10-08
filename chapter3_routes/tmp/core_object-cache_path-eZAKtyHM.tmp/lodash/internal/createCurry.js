define('lodash/internal/createCurry', ['exports', 'lodash/internal/createWrapper', 'lodash/internal/isIterateeCall'], function (exports, createWrapper, isIterateeCall) {

  'use strict';

  function createCurry(flag) {
    function curryFunc(func, arity, guard) {
      if (guard && isIterateeCall['default'](func, arity, guard)) {
        arity = undefined;
      }
      var result = createWrapper['default'](func, flag, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryFunc.placeholder;
      return result;
    }
    return curryFunc;
  }

  exports['default'] = createCurry;

});