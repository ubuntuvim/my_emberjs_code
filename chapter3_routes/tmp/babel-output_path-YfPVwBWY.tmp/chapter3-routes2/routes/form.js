//  app/routes/form.js

import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		willTransition: function willTransition(transition) {
			//  如果是使用this.get('key')获取不了页面输入值，因为不是通过action提交表单的
			var v = this.controller.get('firstName');
			//  任意获取一个作为判断表单输入值
			if (v && !confirm("你确定要离开这个页面吗？?")) {
				transition.abort();
			} else {
				return true;
			}
		}
	}
});