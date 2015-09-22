import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log('running in application....');
		
		return { id: 1, routeName: 'The route is application >> ' };
	}
});