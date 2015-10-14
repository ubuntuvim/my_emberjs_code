//  app/components/drop-target.js

import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attribuBindings: ['draggable'],
	draggable: true,

	dragOver: function() {
		return false;
	},
	didDrop: function(event) {
		let id = event.dataTransfer.getData('text/data');
		console.log('id ======== ' + id);
		this.sendAction('action', id);
	}
});
