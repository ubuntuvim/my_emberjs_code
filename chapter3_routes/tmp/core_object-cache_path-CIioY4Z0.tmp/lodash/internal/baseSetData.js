define('lodash/internal/baseSetData', ['exports', 'lodash/utility/identity', 'lodash/internal/metaMap'], function (exports, identity, metaMap) {

  'use strict';

  var baseSetData = !metaMap['default'] ? identity['default'] : function (func, data) {
    metaMap['default'].set(func, data);
    return func;
  };

  exports['default'] = baseSetData;

});