define('lodash/internal/createPartial', ['exports', 'lodash/internal/createWrapper', 'lodash/internal/replaceHolders', 'lodash/function/restParam'], function (exports, createWrapper, replaceHolders, restParam) {

  'use strict';

  function createPartial(flag) {
    var partialFunc = restParam['default'](function (func, partials) {
      var holders = replaceHolders['default'](partials, partialFunc.placeholder);
      return createWrapper['default'](func, flag, undefined, partials, holders);
    });
    return partialFunc;
  }

  exports['default'] = createPartial;

});