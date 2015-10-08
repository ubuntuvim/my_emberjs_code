define('lodash/internal/createCompounder', ['exports', 'lodash/string/deburr', 'lodash/string/words'], function (exports, deburr, words) {

  'use strict';

  function createCompounder(callback) {
    return function (string) {
      var index = -1,
          array = words['default'](deburr['default'](string)),
          length = array.length,
          result = '';

      while (++index < length) {
        result = callback(result, array[index], index);
      }
      return result;
    };
  }

  exports['default'] = createCompounder;

});