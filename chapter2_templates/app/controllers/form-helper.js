// app/controllers/form-helper.js

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		getInputValue: function() {
			var v = this.get('getValueKey');
			console.log('v = ' + v);

			var v2 = this.get('getByName');
			console.log('v2 = ' + v2);
		},
		getValueByV: function() {
			var v = this.get('key');
			console.log('v = ' + v);
		}
	},
	isChecked: true,
	helloworld: 'The value from route...'
});
