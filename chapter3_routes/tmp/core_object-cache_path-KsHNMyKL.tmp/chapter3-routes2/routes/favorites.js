define('chapter3-routes2/routes/favorites', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/favorites.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return Ember['default'].REVP.hash({
				songs: this.store.find('song'),
				albums: this.store.find('slbum')
			});
		}
	});

});