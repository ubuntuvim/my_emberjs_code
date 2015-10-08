define('lodash/chain/wrapperPlant', ['exports', 'lodash/internal/baseLodash', 'lodash/internal/wrapperClone'], function (exports, baseLodash, wrapperClone) {

  'use strict';

  function wrapperPlant(value) {
    var result,
        parent = this;

    while (parent instanceof baseLodash['default']) {
      var clone = wrapperClone['default'](parent);
      if (result) {
        previous.__wrapped__ = clone;
      } else {
        result = clone;
      }
      var previous = clone;
      parent = parent.__wrapped__;
    }
    previous.__wrapped__ = value;
    return result;
  }

  exports['default'] = wrapperPlant;

});