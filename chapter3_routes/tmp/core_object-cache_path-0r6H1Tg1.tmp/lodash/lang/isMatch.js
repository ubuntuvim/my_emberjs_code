define('lodash/lang/isMatch', ['exports', 'lodash/internal/baseIsMatch', 'lodash/internal/bindCallback', 'lodash/internal/getMatchData'], function (exports, baseIsMatch, bindCallback, getMatchData) {

  'use strict';

  function isMatch(object, source, customizer, thisArg) {
    customizer = typeof customizer == 'function' ? bindCallback['default'](customizer, thisArg, 3) : undefined;
    return baseIsMatch['default'](object, getMatchData['default'](source), customizer);
  }

  exports['default'] = isMatch;

});