define('lodash/chain/chain', ['exports', 'lodash/chain/lodash'], function (exports, lodash) {

  'use strict';

  function chain(value) {
    var result = lodash['default'](value);
    result.__chain__ = true;
    return result;
  }

  exports['default'] = chain;

});