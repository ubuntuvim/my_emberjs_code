define('lodash/internal/baseMatches', ['exports', 'lodash/internal/baseIsMatch', 'lodash/internal/getMatchData', 'lodash/internal/toObject'], function (exports, baseIsMatch, getMatchData, toObject) {

  'use strict';

  function baseMatches(source) {
    var matchData = getMatchData['default'](source);
    if (matchData.length == 1 && matchData[0][2]) {
      var key = matchData[0][0],
          value = matchData[0][1];

      return function (object) {
        if (object == null) {
          return false;
        }
        return object[key] === value && (value !== undefined || key in toObject['default'](object));
      };
    }
    return function (object) {
      return baseIsMatch['default'](object, matchData);
    };
  }

  exports['default'] = baseMatches;

});