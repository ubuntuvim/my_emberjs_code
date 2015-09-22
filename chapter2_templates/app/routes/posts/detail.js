//  app/routes/posts/detail.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
		// console.log('params id = ' + params.post_id);
		console.log('running in detail....');

		//  执行一个循环，模拟休眠
		// for (var i = 0; i < 10000000000; i++) {
			
		// }
		// console.log('The comment route executed...');


		return { id: 1, routeName: 'The route is detail >> ', url: 'https://www.google.com.hk' };
	}
});	
