define('lodash/chain/wrapperValue', ['exports', 'lodash/internal/baseWrapperValue'], function (exports, baseWrapperValue) {

  'use strict';

  function wrapperValue() {
    return baseWrapperValue['default'](this.__wrapped__, this.__actions__);
  }

  exports['default'] = wrapperValue;

});