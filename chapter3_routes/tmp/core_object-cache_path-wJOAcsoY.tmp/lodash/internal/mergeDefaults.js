define('lodash/internal/mergeDefaults', ['exports', 'lodash/object/merge'], function (exports, merge) {

  'use strict';

  function mergeDefaults(objectValue, sourceValue) {
    return objectValue === undefined ? sourceValue : merge['default'](objectValue, sourceValue, mergeDefaults);
  }

  exports['default'] = mergeDefaults;

});