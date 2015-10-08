define('lodash/collection/forEach', ['exports', 'lodash/internal/arrayEach', 'lodash/internal/baseEach', 'lodash/internal/createForEach'], function (exports, arrayEach, baseEach, createForEach) {

	'use strict';

	var forEach = createForEach['default'](arrayEach['default'], baseEach['default']);

	exports['default'] = forEach;

});