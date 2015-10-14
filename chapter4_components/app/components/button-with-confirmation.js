//  app/components/button-with-confirmation.js

import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'button',
	click: function() {
		if (confirm(this.get('text'))) {
			// 在父组件中触发动作
			this.get('onConfirm')();
		}
	}
});