define('lodash/chain/wrapperCommit', ['exports', 'lodash/internal/LodashWrapper'], function (exports, LodashWrapper) {

  'use strict';

  function wrapperCommit() {
    return new LodashWrapper['default'](this.value(), this.__chain__);
  }

  exports['default'] = wrapperCommit;

});