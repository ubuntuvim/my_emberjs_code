define('chapter3-routes2/controllers/login', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/login.js

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			login: function login() {
				//  获取跳转过来之前路由中设置的transition对象
				var transitionObj = this.get('transitionObj');
				console.log('transitionObj = ' + transitionObj);
				if (transitionObj) {
					this.set("transitionObj", null);
					transitionObj.retry();
				} else {
					//  转回首页
					this.transitionToRoute('index');
				}
			}
		}
	});

});