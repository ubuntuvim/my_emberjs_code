define('lodash/math/floor', ['exports', 'lodash/internal/createRound'], function (exports, createRound) {

	'use strict';

	var floor = createRound['default']('floor');

	exports['default'] = floor;

});