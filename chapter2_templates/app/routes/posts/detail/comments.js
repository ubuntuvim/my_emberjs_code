//  app/routes/posts/detail/comments.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log('running in comments...');

//  执行一个循环，模拟休眠
		// for (var i = 0; i < 10000000000; i++) {
			
		// }
		// console.log('The comment route executed...');


		return { id: 1, routeName: 'The route is comments >> '};
	}
});
