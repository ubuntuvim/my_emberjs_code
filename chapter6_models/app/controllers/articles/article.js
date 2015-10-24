//  app/controllers/article.js

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		// 根据文章id更新
		updateArticleById: function(params) {
			var title = this.get('model.title');
			var body = this.get('model.body');
			this.store.findRecord('article', params).then(function(art) {
				art.set('title', title);
				art.set('body', body);

				//  保存更新的值到Store
				art.save();
			});
		}
	}
});
