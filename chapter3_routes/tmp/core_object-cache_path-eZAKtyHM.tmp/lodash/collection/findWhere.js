define('lodash/collection/findWhere', ['exports', 'lodash/internal/baseMatches', 'lodash/collection/find'], function (exports, baseMatches, find) {

  'use strict';

  function findWhere(collection, source) {
    return find['default'](collection, baseMatches['default'](source));
  }

  exports['default'] = findWhere;

});