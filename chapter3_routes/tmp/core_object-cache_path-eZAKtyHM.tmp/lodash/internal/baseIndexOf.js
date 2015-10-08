define('lodash/internal/baseIndexOf', ['exports', 'lodash/internal/indexOfNaN'], function (exports, indexOfNaN) {

  'use strict';

  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN['default'](array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  exports['default'] = baseIndexOf;

});