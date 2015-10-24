//  app/routes/store-example.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// 从store中获取id为JzySrmbivaSSFG6WwOk的数据，这个数据是我在我的firebase中初始化好的
		return this.store.find('article', '-JzySrmbivaSSFG6WwOk');
	}
});
