//  app/routes/article.js

import Ember from 'ember';

export default Ember.Route.extend({

	resetController(controller, isExiting, transition) {
		//  只有model发生变化的时候isExiting才为false
		if (isExiting) {
			//  重置查询属性的值
			controller.set('page', 1);
		}
	},

	// beforeModel: function() {

	// 	// if you just want to transition the query parameters without changing the route
	// 	this.transitionTo({ queryParams: { category: 'java' }});
	// },
	


	queryParams: {
		category: {
			refreshModel: true
		}
	},
	model: function(params) {
		return this.store.query('article', params);
	}

    // model: function(params) {

	   //  // var arr = [
	   //  // 	{ id: 1, title: 'Bower: dependencies and resolutions new', body: "In the bower.json file, I see 2 keys dependencies and resolutionsWhy is that so? I understand Bower has a flat dependency structure. So has it got anything to do with that ?", category: 'java' },
	   //  // 	{ id: 2, title: 'Highly Nested JSON Payload - hasMany error', body: "Welcome to the Ember.js discussion forum. We're running on the open source, Ember.js-powered Discourse forum software. They are also providing the hosting for us. Thanks guys! Please use this space for discussion abo… read more", category: 'php' },
	   //  // 	{ id: 3, title: 'Passing a jwt to my REST adapter new ', body: "This sets up a binding between the category query param in the URL, and the category property on controller:articles. In other words, once the articles route has been entered, any changes to the category query param in the URL will update the category property on controller:articles, and vice versa.", category: 'java'}
	   //  // ];
	   //  console.log('11111111');

	   //  return this.store.query('article', params);
    // }
});