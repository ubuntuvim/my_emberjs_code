define('lodash/collection/partition', ['exports', 'lodash/internal/createAggregator'], function (exports, createAggregator) {

  'use strict';

  var partition = createAggregator['default'](function (result, value, key) {
    result[key ? 0 : 1].push(value);
  }, function () {
    return [[], []];
  });

  exports['default'] = partition;

});