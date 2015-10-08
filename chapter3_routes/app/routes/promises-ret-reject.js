//  app/routes/promises-ret-reject.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//  为了测试效果直接返回reject
		return Ember.RSVP.reject('FAIL');
	},
	actions: {
		error: function(reason) {
			console.log('reason = ' + reason);

			//  如果你想让这个事件冒泡到顶级路由application只需要返回true
			 // return true;
		}
	}
});
