define('chapter3-routes2/routes/articles/article', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/articles/article.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			return this.store.findRecord('article', params.post_id);
		}
	});

});