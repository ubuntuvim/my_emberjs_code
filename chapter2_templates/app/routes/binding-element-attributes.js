import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return { imgUrl: 'http://i1.tietuku.com/1f73778ea702c725.jpg', isEnable: false };
	}
});
