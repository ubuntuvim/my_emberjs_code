define('lodash/object/assign', ['exports', 'lodash/internal/assignWith', 'lodash/internal/baseAssign', 'lodash/internal/createAssigner'], function (exports, assignWith, baseAssign, createAssigner) {

  'use strict';

  var assign = createAssigner['default'](function (object, source, customizer) {
    return customizer ? assignWith['default'](object, source, customizer) : baseAssign['default'](object, source);
  });

  exports['default'] = assign;

});