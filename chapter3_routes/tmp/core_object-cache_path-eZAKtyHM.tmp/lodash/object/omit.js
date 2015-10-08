define('lodash/object/omit', ['exports', 'lodash/internal/arrayMap', 'lodash/internal/baseDifference', 'lodash/internal/baseFlatten', 'lodash/internal/bindCallback', 'lodash/object/keysIn', 'lodash/internal/pickByArray', 'lodash/internal/pickByCallback', 'lodash/function/restParam'], function (exports, arrayMap, baseDifference, baseFlatten, bindCallback, keysIn, pickByArray, pickByCallback, restParam) {

  'use strict';

  var omit = restParam['default'](function (object, props) {
    if (object == null) {
      return {};
    }
    if (typeof props[0] != 'function') {
      var props = arrayMap['default'](baseFlatten['default'](props), String);
      return pickByArray['default'](object, baseDifference['default'](keysIn['default'](object), props));
    }
    var predicate = bindCallback['default'](props[0], props[1], 3);
    return pickByCallback['default'](object, function (value, key, object) {
      return !predicate(value, key, object);
    });
  });

  exports['default'] = omit;

});