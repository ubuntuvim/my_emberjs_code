//  app/routes/handlebars-condition-exp-route.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return {name: 'i2cao.xyz', age: 25, isAtWork: false, isReading: false };
		// return { enable: true };
	}		
});
