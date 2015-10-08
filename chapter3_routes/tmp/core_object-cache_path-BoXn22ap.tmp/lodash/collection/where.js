define('lodash/collection/where', ['exports', 'lodash/internal/baseMatches', 'lodash/collection/filter'], function (exports, baseMatches, filter) {

  'use strict';

  function where(collection, source) {
    return filter['default'](collection, baseMatches['default'](source));
  }

  exports['default'] = where;

});