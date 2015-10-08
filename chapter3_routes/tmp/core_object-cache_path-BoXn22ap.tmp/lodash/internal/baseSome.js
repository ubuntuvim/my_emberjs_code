define('lodash/internal/baseSome', ['exports', 'lodash/internal/baseEach'], function (exports, baseEach) {

  'use strict';

  function baseSome(collection, predicate) {
    var result;

    baseEach['default'](collection, function (value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }

  exports['default'] = baseSome;

});