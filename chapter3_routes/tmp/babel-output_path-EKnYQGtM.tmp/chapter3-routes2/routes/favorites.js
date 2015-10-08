//  app/routes/favorites.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		return Ember.REVP.hash({
			songs: this.store.find('song'),
			albums: this.store.find('slbum')
		});
	}
});