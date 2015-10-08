define('lodash/internal/baseCreate', ['exports', 'lodash/lang/isObject'], function (exports, isObject) {

  'use strict';

  var baseCreate = (function () {
    function object() {}
    return function (prototype) {
      if (isObject['default'](prototype)) {
        object.prototype = prototype;
        var result = new object();
        object.prototype = undefined;
      }
      return result || {};
    };
  })();

  exports['default'] = baseCreate;

});