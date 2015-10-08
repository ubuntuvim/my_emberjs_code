//  app/controllers/articles.js

import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['category'],
	category: null,

	filterArticles: Ember.computed('category', 'model', function () {
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