//  app/routes/article.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function model(params) {
		// console.log('route params.category = ' + params.category);
		// if (!params.category) {
		//   return this.store.find('article'); // no results;
		// }
		// this.controllerFor('articles').set('category', params.category);
		// return this.store.find('article');

		var hash = {};
		var uid = params.category;
		if (uid) {
			hash.category = uid;
		}
		return this.store.query('article', hash);
	},

	actions: {
		queryParamsDidChange: function queryParamsDidChange() {
			// opt into full refresh
			this.refresh();
		}
	}
});