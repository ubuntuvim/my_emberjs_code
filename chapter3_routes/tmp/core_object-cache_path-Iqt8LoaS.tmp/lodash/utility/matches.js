define('lodash/utility/matches', ['exports', 'lodash/internal/baseClone', 'lodash/internal/baseMatches'], function (exports, baseClone, baseMatches) {

  'use strict';

  function matches(source) {
    return baseMatches['default'](baseClone['default'](source, true));
  }

  exports['default'] = matches;

});