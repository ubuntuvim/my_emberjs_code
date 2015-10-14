//  app/components/handle-events.js

import Ember from 'ember';

export default Ember.Component.extend({
	click: function() {
		// alert('click...');
		window.location.href='http://ibeginner.sinaapp.com';
		return true;  // 返回true允许事件冒泡到父组件
	},
	mouseLeave: function() {
		alert("mouseDown....");

		return true;
	}
});
