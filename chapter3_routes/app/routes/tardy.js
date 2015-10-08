//  app/routes/tardy.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return new Ember.RSVP.Promise(function(resolver) {
			console.log('start......');
			Ember.run.later(function() {
				resolver({ msg: 'Hold your horses!!'});
			}, 3000);
		});
	},
	setupController(controller, model) {
		console.log('msg = ' + model.msg);
	}
});
