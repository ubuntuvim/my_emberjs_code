define('lodash/internal/lazyReverse', ['exports', 'lodash/internal/LazyWrapper'], function (exports, LazyWrapper) {

  'use strict';

  function lazyReverse() {
    if (this.__filtered__) {
      var result = new LazyWrapper['default'](this);
      result.__dir__ = -1;
      result.__filtered__ = true;
    } else {
      result = this.clone();
      result.__dir__ *= -1;
    }
    return result;
  }

  exports['default'] = lazyReverse;

});