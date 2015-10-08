define('lodash/string/snakeCase', ['exports', 'lodash/internal/createCompounder'], function (exports, createCompounder) {

  'use strict';

  var snakeCase = createCompounder['default'](function (result, word, index) {
    return result + (index ? '_' : '') + word.toLowerCase();
  });

  exports['default'] = snakeCase;

});