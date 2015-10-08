define('lodash/internal/baseFilter', ['exports', 'lodash/internal/baseEach'], function (exports, baseEach) {

  'use strict';

  function baseFilter(collection, predicate) {
    var result = [];
    baseEach['default'](collection, function (value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  exports['default'] = baseFilter;

});