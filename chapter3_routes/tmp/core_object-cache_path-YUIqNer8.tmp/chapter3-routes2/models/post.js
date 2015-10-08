define('chapter3-routes2/models/post', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		title: DS['default'].attr('string'),
		body: DS['default'].attr('string'),
		timestamp: DS['default'].attr('number')
	});

});