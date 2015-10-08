define('emberfire/torii-providers/firebase', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Object.extend({
    firebase: Ember['default'].inject.service(),

    open: function open(options) {
      var _this = this;

      var provider = options.provider || options.authWith;

      return new Ember['default'].RSVP.Promise(function (resolve, reject) {
        if (!provider) {
          reject(new Error('`provider` must be supplied'));
        }

        if (provider === 'password') {
          if (!options.email && !options.password) {
            reject(new Error('`email` and `password` must be supplied'));
          }

          _this.get('firebase').authWithPassword({
            email: options.email,
            password: options.password
          }, function (error, authData) {

            if (error) {
              reject(error);
            } else {
              resolve(authData);
            }
          });
        } else {
          _this.get('firebase').authWithOAuthPopup(provider, function (error, authData) {
            if (error) {
              reject(error);
            } else {
              resolve(authData);
            }
          });
        }
      });
    }
  });

});