define('lodash/chain/wrapperReverse', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/LodashWrapper', 'lodash/chain/thru'], function (exports, LazyWrapper, LodashWrapper, thru) {

  'use strict';

  function wrapperReverse() {
    var value = this.__wrapped__;

    var interceptor = function interceptor(value) {
      return wrapped && wrapped.__dir__ < 0 ? value : value.reverse();
    };
    if (value instanceof LazyWrapper['default']) {
      var wrapped = value;
      if (this.__actions__.length) {
        wrapped = new LazyWrapper['default'](this);
      }
      wrapped = wrapped.reverse();
      wrapped.__actions__.push({ 'func': thru['default'], 'args': [interceptor], 'thisArg': undefined });
      return new LodashWrapper['default'](wrapped, this.__chain__);
    }
    return this.thru(interceptor);
  }

  exports['default'] = wrapperReverse;

});