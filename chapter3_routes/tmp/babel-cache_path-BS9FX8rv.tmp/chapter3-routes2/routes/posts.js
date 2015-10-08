//  app/routes/posts.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model(params) {
		//return this.store.find('post');
		//return this.store.findRecord('post', params.post_id);

		console.log('执行了路由posts的model回调。。。');

		return [{
			"id": "-JzySrmbivaSSFG6WwOk",
			"body": "testsssss",
			"timestamp": 1443083287846,
			"title": "test"
		}, {
			"id": "-JzyT-VLEWdF6zY3CefO",
			"body": "33333333",
			"timestamp": 1443083323541,
			"title": "test33333"
		}, {
			"id": "-JzyUqbJcT0ct14OizMo",
			"body": "body.....",
			"timestamp": 1443083808036,
			"title": "title1231232132"
		}];
	}
});