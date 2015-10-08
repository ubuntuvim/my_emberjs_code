//  app/routes/funky.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var promises = Ember.RSVP.reject('FAIL');
		//  由于已经知道promises返回的是reject，所以fulfill回调直接写为null
		return promises.then(null, function() {
			return { msg: '恢复reject状态：其实就是在reject回调中继续执行fulfill状态下的代码。' };
		});
	}
});
