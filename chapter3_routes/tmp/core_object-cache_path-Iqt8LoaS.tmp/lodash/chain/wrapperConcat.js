define('lodash/chain/wrapperConcat', ['exports', 'lodash/internal/arrayConcat', 'lodash/internal/baseFlatten', 'lodash/lang/isArray', 'lodash/function/restParam', 'lodash/internal/toObject'], function (exports, arrayConcat, baseFlatten, isArray, restParam, toObject) {

  'use strict';

  var wrapperConcat = restParam['default'](function (values) {
    values = baseFlatten['default'](values);
    return this.thru(function (array) {
      return arrayConcat['default'](isArray['default'](array) ? array : [toObject['default'](array)], values);
    });
  });

  exports['default'] = wrapperConcat;

});