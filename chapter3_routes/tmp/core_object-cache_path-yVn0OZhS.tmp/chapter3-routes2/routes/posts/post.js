define('chapter3-routes2/routes/posts/post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/routes/posts/post.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			console.log('params = ' + params.post_id);
			return this.store.findRecord('post', params.post_id);
		}
	});

});