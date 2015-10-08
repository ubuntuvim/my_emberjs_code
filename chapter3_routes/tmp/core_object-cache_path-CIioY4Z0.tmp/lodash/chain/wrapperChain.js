define('lodash/chain/wrapperChain', ['exports', 'lodash/chain/chain'], function (exports, chain) {

  'use strict';

  function wrapperChain() {
    return chain['default'](this);
  }

  exports['default'] = wrapperChain;

});