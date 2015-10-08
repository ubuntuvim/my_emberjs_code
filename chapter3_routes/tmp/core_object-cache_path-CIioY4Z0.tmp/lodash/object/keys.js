define('lodash/object/keys', ['exports', 'lodash/internal/getNative', 'lodash/internal/isArrayLike', 'lodash/lang/isObject', 'lodash/internal/shimKeys'], function (exports, getNative, isArrayLike, isObject, shimKeys) {

  'use strict';

  var nativeKeys = getNative['default'](Object, 'keys');

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  var keys = !nativeKeys ? shimKeys['default'] : function (object) {
    var Ctor = object == null ? undefined : object.constructor;
    if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike['default'](object)) {
      return shimKeys['default'](object);
    }
    return isObject['default'](object) ? nativeKeys(object) : [];
  };

  exports['default'] = keys;

});