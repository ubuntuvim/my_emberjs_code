define('chapter3-routes2/routes/posts', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			// return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
			// 加载post（是一个model）
			// return this.store.query('post');
			console.log('posts route model ....');
			return this.store.findRecord('post', params.post_id);
		}
	});

});