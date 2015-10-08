//  app/routes/articles/article.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function model(params) {
		return this.store.findRecord('article', params.post_id);
	}
});