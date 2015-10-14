//  app/routes/wrapping-content-in-component-route.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return { id: 1, title: 'test title', body: 'this is body ...', author: 'ubuntuvim' };
	}
});
