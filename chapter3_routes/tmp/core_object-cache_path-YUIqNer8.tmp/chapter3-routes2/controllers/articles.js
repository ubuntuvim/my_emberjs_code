define('chapter3-routes2/controllers/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/articles.js

	exports['default'] = Ember['default'].Controller.extend({
		queryParams: ['category'],
		category: null,

		filterArticles: Ember['default'].computed('category', 'model', function () {
			var category = this.get('category');
			var articles = this.get('model');

			if (category) {
				//如果参数为null则显示全部数据
				console.log('articles1 = ' + articles);

				return articles.filterBy('category', articles);
				// this.set('model', articles.findBy('category', category));
			} else {
					console.log('articles2 = ' + articles);
					// this.set('model', articles.find());
					return articles;
				}
		}),
		// queryField: Ember.computed.oneWay('category'),
		// actions: {
		//   search: function() {
		//     this.set('query', this.get('queryField'));
		//   }
		// },

		actions: {
			search: function search() {

				console.log('12121 = ' + this.get('queryField'));
				// this.set('category', this.get('category'));
				this.set('filterArticles', this.get('queryField'), this.get('model'));
				// this.set('category', this.get('queryField'));
			},

			saveItem: function saveItem() {
				var newActicle = this.store.createRecord('article', {
					title: this.get('title'),
					body: this.get('body'),
					category: this.get('category'),
					timestamp: new Date().getTime()
				});
				newActicle.save();
			}
		}

	});

});