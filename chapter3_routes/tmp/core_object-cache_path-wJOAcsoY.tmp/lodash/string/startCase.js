define('lodash/string/startCase', ['exports', 'lodash/internal/createCompounder'], function (exports, createCompounder) {

  'use strict';

  var startCase = createCompounder['default'](function (result, word, index) {
    return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
  });

  exports['default'] = startCase;

});