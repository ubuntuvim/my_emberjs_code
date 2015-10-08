define('lodash/lang/isNative', ['exports', 'lodash/lang/isFunction', 'lodash/internal/isObjectLike'], function (exports, isFunction, isObjectLike) {

  'use strict';

  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var fnToString = Function.prototype.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * Checks if `value` is a native function.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction['default'](value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike['default'](value) && reIsHostCtor.test(value);
  }

  exports['default'] = isNative;

});