//  app/routes/dev-helper.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return [
			{ id: 1, name: 'chen', age: 25 },
			{ id: 2, name: 'ibeginner.sinaapp.com', age: 2 }
		];
	}
});
