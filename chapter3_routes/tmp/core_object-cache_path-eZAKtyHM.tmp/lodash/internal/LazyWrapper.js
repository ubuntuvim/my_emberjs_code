define('lodash/internal/LazyWrapper', ['exports', 'lodash/internal/baseCreate', 'lodash/internal/baseLodash'], function (exports, baseCreate, baseLodash) {

  'use strict';

  var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @param {*} value The value to wrap.
   */
  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = POSITIVE_INFINITY;
    this.__views__ = [];
  }

  LazyWrapper.prototype = baseCreate['default'](baseLodash['default'].prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;

  exports['default'] = LazyWrapper;

});