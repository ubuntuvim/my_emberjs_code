define('lodash/function/delay', ['exports', 'lodash/internal/baseDelay', 'lodash/function/restParam'], function (exports, baseDelay, restParam) {

  'use strict';

  var delay = restParam['default'](function (func, wait, args) {
    return baseDelay['default'](func, wait, args);
  });

  exports['default'] = delay;

});