// app/controllers/myaction.js

import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		bandDidChange: function(event) {
			console.log('event = ' + event);
		},
		hitMe1: function() {
			console.log('hitMe1.....');
		},
		hitMe2: function() {
			console.log('hitMe2.....');
		}
	}
	
});
