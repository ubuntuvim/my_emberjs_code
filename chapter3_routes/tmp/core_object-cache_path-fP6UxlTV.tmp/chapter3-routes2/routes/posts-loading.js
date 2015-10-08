define('chapter3-routes2/routes/posts-loading', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		postsLoadingFlag: true
	});

});