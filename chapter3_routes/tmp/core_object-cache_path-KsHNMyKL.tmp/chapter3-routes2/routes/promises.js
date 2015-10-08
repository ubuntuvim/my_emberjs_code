define('chapter3-routes2/routes/promises', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
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

});