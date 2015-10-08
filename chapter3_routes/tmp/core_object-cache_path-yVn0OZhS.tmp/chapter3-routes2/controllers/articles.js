define('chapter3-routes2/controllers/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/articles.js

	exports['default'] = Ember['default'].Controller.extend({
		queryParams: ['category'],
		category: null,

		filterArticles: Ember['default'].computed('category', 'model', function () {
			var category = this.get('category');
			var articles = this.get('model');
			console.log('category = ' + category);

			if (category) {
				//如果参数为null则显示全部数据
				return articles.filterBy('category', category);
			} else {
				return articles;
			}
		})
	});

});