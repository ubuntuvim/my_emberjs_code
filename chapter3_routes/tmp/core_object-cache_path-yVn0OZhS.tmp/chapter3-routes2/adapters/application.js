define('chapter3-routes2/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, Ember, FirebaseAdapter) {

  'use strict';

  //  app/adapters/application.js

  var inject = Ember['default'].inject;

  exports['default'] = FirebaseAdapter['default'].extend({
    firebase: inject.service()
  });

});