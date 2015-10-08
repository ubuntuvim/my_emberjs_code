define('lodash/array/union', ['exports', 'lodash/internal/baseFlatten', 'lodash/internal/baseUniq', 'lodash/function/restParam'], function (exports, baseFlatten, baseUniq, restParam) {

  'use strict';

  var union = restParam['default'](function (arrays) {
    return baseUniq['default'](baseFlatten['default'](arrays, false, true));
  });

  exports['default'] = union;

});