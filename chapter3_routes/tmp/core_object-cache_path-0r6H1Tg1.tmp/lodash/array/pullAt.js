define('lodash/array/pullAt', ['exports', 'lodash/internal/baseAt', 'lodash/internal/baseCompareAscending', 'lodash/internal/baseFlatten', 'lodash/internal/basePullAt', 'lodash/function/restParam'], function (exports, baseAt, baseCompareAscending, baseFlatten, basePullAt, restParam) {

  'use strict';

  var pullAt = restParam['default'](function (array, indexes) {
    indexes = baseFlatten['default'](indexes);

    var result = baseAt['default'](array, indexes);
    basePullAt['default'](array, indexes.sort(baseCompareAscending['default']));
    return result;
  });

  exports['default'] = pullAt;

});