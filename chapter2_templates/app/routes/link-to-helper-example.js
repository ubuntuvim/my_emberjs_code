// app/routes/link-to-helper-example.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return [
			Ember.Object.create({ name: 'chen', age: 25}),
			Ember.Object.create({ name: 'i2cao.xyz', age: 0.2}),
			Ember.Object.create({ name: 'ibeginner.sinaapp.com', age: 1}),
			Ember.Object.create({ name: 'ubuntuvim.xyz', age: 3})
		];
	}
});
