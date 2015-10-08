define('lodash/internal/LodashWrapper', ['exports', 'lodash/internal/baseCreate', 'lodash/internal/baseLodash'], function (exports, baseCreate, baseLodash) {

  'use strict';

  function LodashWrapper(value, chainAll, actions) {
    this.__wrapped__ = value;
    this.__actions__ = actions || [];
    this.__chain__ = !!chainAll;
  }

  LodashWrapper.prototype = baseCreate['default'](baseLodash['default'].prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;

  exports['default'] = LodashWrapper;

});