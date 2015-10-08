define('lodash/function/once', ['exports', 'lodash/function/before'], function (exports, before) {

  'use strict';

  function once(func) {
    return before['default'](2, func);
  }

  exports['default'] = once;

});