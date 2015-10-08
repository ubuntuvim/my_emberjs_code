//  app/routes/auth.js

import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel: function beforeModel(transition) {
		// 在名为auth的controller设置了userIsLogin为false，默认是未登录
		if (!this.controllerFor("auth").get('userIsLogin')) {
			var loginController = this.controllerFor("login");
			// 保存transition对象
			loginController.set("transitionObj", transition);
			console.log('to login page...');
			this.transitionTo("login"); // 跳转到路由login
		}
	}
});