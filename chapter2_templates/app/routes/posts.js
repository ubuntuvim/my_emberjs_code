//  app/routes/posts.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		
		console.log('running in posts...');
		return { id: 1, routeName: 'The route is posts >> '};
		// return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
	}
	
});
