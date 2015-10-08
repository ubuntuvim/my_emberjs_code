define('lodash/internal/baseExtremum', ['exports', 'lodash/internal/baseEach'], function (exports, baseEach) {

  'use strict';

  function baseExtremum(collection, iteratee, comparator, exValue) {
    var computed = exValue,
        result = computed;

    baseEach['default'](collection, function (value, index, collection) {
      var current = +iteratee(value, index, collection);
      if (comparator(current, computed) || current === exValue && current === result) {
        computed = current;
        result = value;
      }
    });
    return result;
  }

  exports['default'] = baseExtremum;

});