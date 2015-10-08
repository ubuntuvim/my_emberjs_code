define('lodash/lang/isNaN', ['exports', 'lodash/lang/isNumber'], function (exports, isNumber) {

  'use strict';

  function isNaN(value) {
    // An `NaN` primitive is the only value that is not equal to itself.
    // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
    return isNumber['default'](value) && value != +value;
  }

  exports['default'] = isNaN;

});