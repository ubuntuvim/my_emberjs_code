define('emberfire/services/firebase', ['exports', 'firebase'], function (exports, Firebase) {

  'use strict';

  exports['default'] = {
    create: function create() {
      return new Firebase['default'](this.config.firebase);
    },

    config: null,
    isServiceFactory: true
  };

});