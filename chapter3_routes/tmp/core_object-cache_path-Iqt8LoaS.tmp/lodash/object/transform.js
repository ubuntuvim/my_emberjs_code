define('lodash/object/transform', ['exports', 'lodash/internal/arrayEach', 'lodash/internal/baseCallback', 'lodash/internal/baseCreate', 'lodash/internal/baseForOwn', 'lodash/lang/isArray', 'lodash/lang/isFunction', 'lodash/lang/isObject', 'lodash/lang/isTypedArray'], function (exports, arrayEach, baseCallback, baseCreate, baseForOwn, isArray, isFunction, isObject, isTypedArray) {

  'use strict';

  function transform(object, iteratee, accumulator, thisArg) {
    var isArr = isArray['default'](object) || isTypedArray['default'](object);
    iteratee = baseCallback['default'](iteratee, thisArg, 4);

    if (accumulator == null) {
      if (isArr || isObject['default'](object)) {
        var Ctor = object.constructor;
        if (isArr) {
          accumulator = isArray['default'](object) ? new Ctor() : [];
        } else {
          accumulator = baseCreate['default'](isFunction['default'](Ctor) ? Ctor.prototype : undefined);
        }
      } else {
        accumulator = {};
      }
    }
    (isArr ? arrayEach['default'] : baseForOwn['default'])(object, function (value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }

  exports['default'] = transform;

});