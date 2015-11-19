// app/components/login-form.js

import Ember from 'ember';

export default Ember.Component.extend({
    // authenticator: 'authenticator: custom',

    actions: {
        authenticate: function() {
            var user = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:custom', user).catch((msg) => {
                this.set('errorMessage', msg);
            });
        }
    }
});
