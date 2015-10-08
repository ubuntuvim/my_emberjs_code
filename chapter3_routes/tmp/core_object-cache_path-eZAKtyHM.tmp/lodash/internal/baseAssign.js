define('lodash/internal/baseAssign', ['exports', 'lodash/internal/baseCopy', 'lodash/object/keys'], function (exports, baseCopy, keys) {

  'use strict';

  function baseAssign(object, source) {
    return source == null ? object : baseCopy['default'](source, keys['default'](source), object);
  }

  exports['default'] = baseAssign;

});