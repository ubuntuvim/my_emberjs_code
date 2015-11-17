// app/controllers/login.js

import Ember from 'ember';

import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    // init: function(){
    //     this._super();
    //     console.log('navbar controller starting...');
    // },
    //
    // actions: {
    //     authenticate: function() {
    //         return true;
    //     },
    //     sessionRequestAuthentication: function() {
    //         return true;
    //     }
    // }
});
