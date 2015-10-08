define('lodash/internal/SetCache', ['exports', 'lodash/internal/cachePush', 'lodash/internal/getNative', 'lodash/internal/root'], function (exports, cachePush, getNative, root) {

  'use strict';

  var Set = getNative['default'](root['default'], 'Set');

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeCreate = getNative['default'](Object, 'create');

  /**
   *
   * Creates a cache object to store unique values.
   *
   * @private
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var length = values ? values.length : 0;

    this.data = { 'hash': nativeCreate(null), 'set': new Set() };
    while (length--) {
      this.push(values[length]);
    }
  }

  // Add functions to the `Set` cache.
  SetCache.prototype.push = cachePush['default'];

  exports['default'] = SetCache;

});