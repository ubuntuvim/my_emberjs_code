import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function beforeModel() {
		console.log('execute model()');

		var promise = this.fetchTheAnswer();
		promise.then(function () {
			console.log('succuess.....');
		}, function () {
			console.log('fail.....');
		});
	},

	fulfill: function fulfill(answer) {
		console.log("The answer is " + answer);
	},

	reject: function reject(reason) {
		console.log("Couldn't get the answer! Reason: " + reason);
	},

	fetchTheAnswer: function fetchTheAnswer() {}
});