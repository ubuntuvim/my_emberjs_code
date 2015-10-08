define('chapter3-routes2/models/article', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	//   app/models/article.js

	exports['default'] = DS['default'].Model.extend({
		title: DS['default'].attr('string'),
		body: DS['default'].attr('string'),
		category: DS['default'].attr('string')
	});

});