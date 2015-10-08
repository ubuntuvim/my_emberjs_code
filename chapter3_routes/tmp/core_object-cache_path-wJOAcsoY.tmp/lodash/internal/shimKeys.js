define('lodash/internal/shimKeys', ['exports', 'lodash/lang/isArguments', 'lodash/lang/isArray', 'lodash/internal/isIndex', 'lodash/internal/isLength', 'lodash/object/keysIn'], function (exports, isArguments, isArray, isIndex, isLength, keysIn) {

  'use strict';

  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A fallback implementation of `Object.keys` which creates an array of the
   * own enumerable property names of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function shimKeys(object) {
    var props = keysIn['default'](object),
        propsLength = props.length,
        length = propsLength && object.length;

    var allowIndexes = !!length && isLength['default'](length) && (isArray['default'](object) || isArguments['default'](object));

    var index = -1,
        result = [];

    while (++index < propsLength) {
      var key = props[index];
      if (allowIndexes && isIndex['default'](key, length) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }

  exports['default'] = shimKeys;

});