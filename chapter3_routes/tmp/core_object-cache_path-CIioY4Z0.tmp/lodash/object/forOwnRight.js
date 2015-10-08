define('lodash/object/forOwnRight', ['exports', 'lodash/internal/baseForOwnRight', 'lodash/internal/createForOwn'], function (exports, baseForOwnRight, createForOwn) {

	'use strict';

	var forOwnRight = createForOwn['default'](baseForOwnRight['default']);

	exports['default'] = forOwnRight;

});