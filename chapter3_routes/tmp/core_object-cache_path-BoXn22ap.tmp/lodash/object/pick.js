define('lodash/object/pick', ['exports', 'lodash/internal/baseFlatten', 'lodash/internal/bindCallback', 'lodash/internal/pickByArray', 'lodash/internal/pickByCallback', 'lodash/function/restParam'], function (exports, baseFlatten, bindCallback, pickByArray, pickByCallback, restParam) {

  'use strict';

  var pick = restParam['default'](function (object, props) {
    if (object == null) {
      return {};
    }
    return typeof props[0] == 'function' ? pickByCallback['default'](object, bindCallback['default'](props[0], props[1], 3)) : pickByArray['default'](object, baseFlatten['default'](props));
  });

  exports['default'] = pick;

});