//  app/routes/index.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		 return [
	    	{ id: 1, title: 'Bower: dependencies and resolutions new', body: "In the bower.json file, I see 2 keys dependencies and resolutionsWhy is that so? I understand Bower has a flat dependency structure. So has it got anything to do with that ?", pn: 'bar-component' },
	    	{ id: 2, title: 'Highly Nested JSON Payload - hasMany error', body: "Welcome to the Ember.js discussion forum. We're running on the open source, Ember.js-powered Discourse forum software. They are also providing the hosting for us. Thanks guys! Please use this space for discussion abo… read more", pn: 'foo-component' },
	    	{ id: 3, title: 'Passing a jwt to my REST adapter new ', body: "This sets up a binding between the category query param in the URL, and the category property on controller:articles. In other words, once the articles route has been entered, any changes to the category query param in the URL will update the category property on controller:articles, and vice versa.", pn: 'bar-component'}
	    ];
	   
	}
});
