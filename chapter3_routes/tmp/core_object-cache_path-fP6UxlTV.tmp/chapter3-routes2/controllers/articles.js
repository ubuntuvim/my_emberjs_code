define('chapter3-routes2/controllers/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/articles.js

	exports['default'] = Ember['default'].Controller.extend({
					queryParams: ['category'],
					category: null
					// ,

					//  定义一个返回数组的计算属性，可以直接在模板上遍历
					// filteredArticles: Ember.computed('category', 'model', function() {
					//  var category = this.get('category');
					//  var articles = this.get('model');

					//  if (category) {
					//      return articles.filterBy('category', category);
					//  } else {
					//      return articles;
					//  }
					// })
	});

});