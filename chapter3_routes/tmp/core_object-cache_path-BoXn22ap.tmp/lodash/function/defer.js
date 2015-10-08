define('lodash/function/defer', ['exports', 'lodash/internal/baseDelay', 'lodash/function/restParam'], function (exports, baseDelay, restParam) {

  'use strict';

  var defer = restParam['default'](function (func, args) {
    return baseDelay['default'](func, 1, args);
  });

  exports['default'] = defer;

});