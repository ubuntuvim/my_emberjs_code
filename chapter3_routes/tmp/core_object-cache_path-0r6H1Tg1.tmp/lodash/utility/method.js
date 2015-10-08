define('lodash/utility/method', ['exports', 'lodash/internal/invokePath', 'lodash/function/restParam'], function (exports, invokePath, restParam) {

  'use strict';

  var method = restParam['default'](function (path, args) {
    return function (object) {
      return invokePath['default'](object, path, args);
    };
  });

  exports['default'] = method;

});