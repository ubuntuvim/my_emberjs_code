define('lodash/internal/compareAscending', ['exports', 'lodash/internal/baseCompareAscending'], function (exports, baseCompareAscending) {

  'use strict';

  function compareAscending(object, other) {
    return baseCompareAscending['default'](object.criteria, other.criteria) || object.index - other.index;
  }

  exports['default'] = compareAscending;

});