define('lodash/collection/indexBy', ['exports', 'lodash/internal/createAggregator'], function (exports, createAggregator) {

  'use strict';

  var indexBy = createAggregator['default'](function (result, value, key) {
    result[key] = value;
  });

  exports['default'] = indexBy;

});