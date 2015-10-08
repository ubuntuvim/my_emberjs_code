define('lodash/string/kebabCase', ['exports', 'lodash/internal/createCompounder'], function (exports, createCompounder) {

  'use strict';

  var kebabCase = createCompounder['default'](function (result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
  });

  exports['default'] = kebabCase;

});