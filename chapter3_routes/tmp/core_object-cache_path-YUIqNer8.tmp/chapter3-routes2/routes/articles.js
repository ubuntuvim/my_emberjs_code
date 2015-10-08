define('chapter3-routes2/routes/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/article.js

	exports['default'] = Ember['default'].Route.extend({

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

});