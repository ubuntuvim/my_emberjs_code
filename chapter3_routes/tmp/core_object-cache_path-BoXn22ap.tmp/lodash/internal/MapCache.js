define('lodash/internal/MapCache', ['exports', 'lodash/internal/mapDelete', 'lodash/internal/mapGet', 'lodash/internal/mapHas', 'lodash/internal/mapSet'], function (exports, mapDelete, mapGet, mapHas, mapSet) {

  'use strict';

  function MapCache() {
    this.__data__ = {};
  }

  // Add functions to the `Map` cache.
  MapCache.prototype['delete'] = mapDelete['default'];
  MapCache.prototype.get = mapGet['default'];
  MapCache.prototype.has = mapHas['default'];
  MapCache.prototype.set = mapSet['default'];

  exports['default'] = MapCache;

});