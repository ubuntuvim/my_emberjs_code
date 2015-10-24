//  app/routes/articles.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//  返回firebase数据库中的所有article
		return this.store.findAll('article');
		
		// return this.store.peekAll('article');
	
		//  使用query方法查询category为Java的数据
		// return this.store.query('article', { filter: { category: 'java' } })
		// 			.then(function(item) {
		// 				//  对匹配的数据做处理
		// 				return item;
		// 			});
	}
});
