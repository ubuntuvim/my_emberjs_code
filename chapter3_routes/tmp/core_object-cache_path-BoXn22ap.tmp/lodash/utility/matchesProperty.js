define('lodash/utility/matchesProperty', ['exports', 'lodash/internal/baseClone', 'lodash/internal/baseMatchesProperty'], function (exports, baseClone, baseMatchesProperty) {

  'use strict';

  function matchesProperty(path, srcValue) {
    return baseMatchesProperty['default'](path, baseClone['default'](srcValue, true));
  }

  exports['default'] = matchesProperty;

});