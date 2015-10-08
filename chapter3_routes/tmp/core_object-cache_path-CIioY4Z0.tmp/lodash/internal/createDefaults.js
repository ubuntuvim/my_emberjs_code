define('lodash/internal/createDefaults', ['exports', 'lodash/function/restParam'], function (exports, restParam) {

  'use strict';

  function createDefaults(assigner, customizer) {
    return restParam['default'](function (args) {
      var object = args[0];
      if (object == null) {
        return object;
      }
      args.push(customizer);
      return assigner.apply(undefined, args);
    });
  }

  exports['default'] = createDefaults;

});