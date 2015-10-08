define('lodash/internal/createBindWrapper', ['exports', 'lodash/internal/createCtorWrapper', 'lodash/internal/root'], function (exports, createCtorWrapper, root) {

  'use strict';

  function createBindWrapper(func, thisArg) {
    var Ctor = createCtorWrapper['default'](func);

    function wrapper() {
      var fn = this && this !== root['default'] && this instanceof wrapper ? Ctor : func;
      return fn.apply(thisArg, arguments);
    }
    return wrapper;
  }

  exports['default'] = createBindWrapper;

});