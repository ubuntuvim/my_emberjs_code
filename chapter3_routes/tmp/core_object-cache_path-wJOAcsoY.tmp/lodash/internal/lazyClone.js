define('lodash/internal/lazyClone', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/arrayCopy'], function (exports, LazyWrapper, arrayCopy) {

  'use strict';

  function lazyClone() {
    var result = new LazyWrapper['default'](this.__wrapped__);
    result.__actions__ = arrayCopy['default'](this.__actions__);
    result.__dir__ = this.__dir__;
    result.__filtered__ = this.__filtered__;
    result.__iteratees__ = arrayCopy['default'](this.__iteratees__);
    result.__takeCount__ = this.__takeCount__;
    result.__views__ = arrayCopy['default'](this.__views__);
    return result;
  }

  exports['default'] = lazyClone;

});