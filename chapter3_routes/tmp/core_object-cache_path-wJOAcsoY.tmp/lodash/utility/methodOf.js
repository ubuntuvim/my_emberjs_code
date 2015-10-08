define('lodash/utility/methodOf', ['exports', 'lodash/internal/invokePath', 'lodash/function/restParam'], function (exports, invokePath, restParam) {

  'use strict';

  var methodOf = restParam['default'](function (object, args) {
    return function (path) {
      return invokePath['default'](object, path, args);
    };
  });

  exports['default'] = methodOf;

});