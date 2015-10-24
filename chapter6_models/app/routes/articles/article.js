//  app/routes/articles/article.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
		// console.log('params = ' + params.article_id);
		// 'chendequanroob@gmail.com'
		return this.store.findRecord('article', params.article_id);

		// return this.store.peekRecord('article', params.article_id);
	}
});
