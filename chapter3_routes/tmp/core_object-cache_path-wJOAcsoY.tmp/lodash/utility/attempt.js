define('lodash/utility/attempt', ['exports', 'lodash/lang/isError', 'lodash/function/restParam'], function (exports, isError, restParam) {

  'use strict';

  var attempt = restParam['default'](function (func, args) {
    try {
      return func.apply(undefined, args);
    } catch (e) {
      return isError['default'](e) ? e : new Error(e);
    }
  });

  exports['default'] = attempt;

});