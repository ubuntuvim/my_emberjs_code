define('emberfire/utils/to-promise', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = function (fn, context, _args, errorMsg) {
    var args = _args || [];
    return new Ember['default'].RSVP.Promise(function (resolve, reject) {
      var callback = function callback(error) {
        if (error) {
          if (errorMsg && typeof error === 'object') {
            error.location = errorMsg;
          }
          reject(error);
        } else {
          resolve();
        }
      };
      args.push(callback);
      fn.apply(context, args);
    });
  }

});