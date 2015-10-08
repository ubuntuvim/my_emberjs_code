define('lodash/internal/getMatchData', ['exports', 'lodash/internal/isStrictComparable', 'lodash/object/pairs'], function (exports, isStrictComparable, pairs) {

  'use strict';

  function getMatchData(object) {
    var result = pairs['default'](object),
        length = result.length;

    while (length--) {
      result[length][2] = isStrictComparable['default'](result[length][1]);
    }
    return result;
  }

  exports['default'] = getMatchData;

});