define('lodash/internal/cachePush', ['exports', 'lodash/lang/isObject'], function (exports, isObject) {

  'use strict';

  function cachePush(value) {
    var data = this.data;
    if (typeof value == 'string' || isObject['default'](value)) {
      data.set.add(value);
    } else {
      data.hash[value] = true;
    }
  }

  exports['default'] = cachePush;

});