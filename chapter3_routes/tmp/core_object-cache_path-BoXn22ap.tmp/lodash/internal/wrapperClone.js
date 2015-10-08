define('lodash/internal/wrapperClone', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/LodashWrapper', 'lodash/internal/arrayCopy'], function (exports, LazyWrapper, LodashWrapper, arrayCopy) {

  'use strict';

  function wrapperClone(wrapper) {
    return wrapper instanceof LazyWrapper['default'] ? wrapper.clone() : new LodashWrapper['default'](wrapper.__wrapped__, wrapper.__chain__, arrayCopy['default'](wrapper.__actions__));
  }

  exports['default'] = wrapperClone;

});