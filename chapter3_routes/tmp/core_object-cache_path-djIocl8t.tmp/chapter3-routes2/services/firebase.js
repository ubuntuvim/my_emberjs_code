define('chapter3-routes2/services/firebase', ['exports', 'emberfire/services/firebase', 'chapter3-routes2/config/environment'], function (exports, Firebase, config) {

	'use strict';

	Firebase['default'].config = config['default'];

	exports['default'] = Firebase['default'];

});