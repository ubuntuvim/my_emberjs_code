// app/routes/posts/post.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		console.log('params = ' + params.post_id);
		return this.store.findRecord('post', params.post_id);
	}
});
