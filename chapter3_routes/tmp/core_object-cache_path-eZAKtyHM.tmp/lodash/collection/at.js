define('lodash/collection/at', ['exports', 'lodash/internal/baseAt', 'lodash/internal/baseFlatten', 'lodash/function/restParam'], function (exports, baseAt, baseFlatten, restParam) {

  'use strict';

  var at = restParam['default'](function (collection, props) {
    return baseAt['default'](collection, baseFlatten['default'](props));
  });

  exports['default'] = at;

});