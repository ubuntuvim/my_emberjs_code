//  app/routes/posts/detail/comments/comment.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		console.log('params id = ' + params.post_id);
		console.log('running in comment...');
		return { id: 1, routeName: 'The route is comment >> '};
	}
});
