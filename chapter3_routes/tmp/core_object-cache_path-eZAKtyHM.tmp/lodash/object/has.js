define('lodash/object/has', ['exports', 'lodash/internal/baseGet', 'lodash/internal/baseSlice', 'lodash/lang/isArguments', 'lodash/lang/isArray', 'lodash/internal/isIndex', 'lodash/internal/isKey', 'lodash/internal/isLength', 'lodash/array/last', 'lodash/internal/toPath'], function (exports, baseGet, baseSlice, isArguments, isArray, isIndex, isKey, isLength, last, toPath) {

  'use strict';

  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if `path` is a direct property.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
   * @example
   *
   * var object = { 'a': { 'b': { 'c': 3 } } };
   *
   * _.has(object, 'a');
   * // => true
   *
   * _.has(object, 'a.b.c');
   * // => true
   *
   * _.has(object, ['a', 'b', 'c']);
   * // => true
   */
  function has(object, path) {
    if (object == null) {
      return false;
    }
    var result = hasOwnProperty.call(object, path);
    if (!result && !isKey['default'](path)) {
      path = toPath['default'](path);
      object = path.length == 1 ? object : baseGet['default'](object, baseSlice['default'](path, 0, -1));
      if (object == null) {
        return false;
      }
      path = last['default'](path);
      result = hasOwnProperty.call(object, path);
    }
    return result || isLength['default'](object.length) && isIndex['default'](path, object.length) && (isArray['default'](object) || isArguments['default'](object));
  }

  exports['default'] = has;

});