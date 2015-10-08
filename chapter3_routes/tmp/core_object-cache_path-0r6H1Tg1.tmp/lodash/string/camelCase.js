define('lodash/string/camelCase', ['exports', 'lodash/internal/createCompounder'], function (exports, createCompounder) {

  'use strict';

  var camelCase = createCompounder['default'](function (result, word, index) {
    word = word.toLowerCase();
    return result + (index ? word.charAt(0).toUpperCase() + word.slice(1) : word);
  });

  exports['default'] = camelCase;

});