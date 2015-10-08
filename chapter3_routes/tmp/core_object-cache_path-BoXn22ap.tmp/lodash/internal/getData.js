define('lodash/internal/getData', ['exports', 'lodash/internal/metaMap', 'lodash/utility/noop'], function (exports, metaMap, noop) {

  'use strict';

  var getData = !metaMap['default'] ? noop['default'] : function (func) {
    return metaMap['default'].get(func);
  };

  exports['default'] = getData;

});