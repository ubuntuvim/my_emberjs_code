//  app/routes/padding-properties-to-component.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		 return [
	    	{ id: 1, title: 'Bower: dependencies and resolutions new', body: "In the bower.json file, I see 2 keys dependencies and resolutionsWhy is that so? " },
	    	{ id: 2, title: 'Highly Nested JSON Payload - hasMany error', body: "Welcome to the Ember.js discussion forum. We're running on the open source, Ember.js-powered Discourse forum software. " },
	    	{ id: 3, title: 'Passing a jwt to my REST adapter new ', body: "This sets up a binding between the category query param in the URL, and the category property on controller:articles. " }
	    ];
	   
	}
});
