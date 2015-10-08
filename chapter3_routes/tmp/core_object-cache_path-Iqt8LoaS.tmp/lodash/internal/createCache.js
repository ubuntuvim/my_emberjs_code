define('lodash/internal/createCache', ['exports', 'lodash/internal/SetCache', 'lodash/internal/getNative', 'lodash/internal/root'], function (exports, SetCache, getNative, root) {

  'use strict';

  var Set = getNative['default'](root['default'], 'Set');

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeCreate = getNative['default'](Object, 'create');

  /**
   * Creates a `Set` cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [values] The values to cache.
   * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
   */
  function createCache(values) {
    return nativeCreate && Set ? new SetCache['default'](values) : null;
  }

  exports['default'] = createCache;

});