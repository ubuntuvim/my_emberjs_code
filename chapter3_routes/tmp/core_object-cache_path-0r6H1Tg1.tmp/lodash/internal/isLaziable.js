define('lodash/internal/isLaziable', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/getData', 'lodash/internal/getFuncName', 'lodash/chain/lodash'], function (exports, LazyWrapper, getData, getFuncName, lodash) {

  'use strict';

  function isLaziable(func) {
    var funcName = getFuncName['default'](func);
    if (!(funcName in LazyWrapper['default'].prototype)) {
      return false;
    }
    var other = lodash['default'][funcName];
    if (func === other) {
      return true;
    }
    var data = getData['default'](other);
    return !!data && func === data[0];
  }

  exports['default'] = isLaziable;

});