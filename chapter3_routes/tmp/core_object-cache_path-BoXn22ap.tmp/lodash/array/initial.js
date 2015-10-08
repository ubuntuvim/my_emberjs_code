define('lodash/array/initial', ['exports', 'lodash/array/dropRight'], function (exports, dropRight) {

  'use strict';

  function initial(array) {
    return dropRight['default'](array, 1);
  }

  exports['default'] = initial;

});