define('lodash/collection/pluck', ['exports', 'lodash/collection/map', 'lodash/utility/property'], function (exports, map, property) {

  'use strict';

  function pluck(collection, path) {
    return map['default'](collection, property['default'](path));
  }

  exports['default'] = pluck;

});