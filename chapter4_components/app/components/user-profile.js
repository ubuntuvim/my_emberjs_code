//  app/components/user-profile.js

import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		userDidDeleteAccount: function() {
			console.log('userDidDeleteAccount...');
		},
		sendMessage: function() {
			console.log('sendMessage....');
		}
	}
});