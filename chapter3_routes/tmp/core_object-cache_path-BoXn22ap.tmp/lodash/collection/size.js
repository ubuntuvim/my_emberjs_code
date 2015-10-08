define('lodash/collection/size', ['exports', 'lodash/internal/getLength', 'lodash/internal/isLength', 'lodash/object/keys'], function (exports, getLength, isLength, keys) {

  'use strict';

  function size(collection) {
    var length = collection ? getLength['default'](collection) : 0;
    return isLength['default'](length) ? length : keys['default'](collection).length;
  }

  exports['default'] = size;

});