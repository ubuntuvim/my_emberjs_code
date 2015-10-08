define('lodash/array/rest', ['exports', 'lodash/array/drop'], function (exports, drop) {

  'use strict';

  function rest(array) {
    return drop['default'](array, 1);
  }

  exports['default'] = rest;

});