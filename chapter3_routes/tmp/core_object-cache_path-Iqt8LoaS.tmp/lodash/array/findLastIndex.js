define('lodash/array/findLastIndex', ['exports', 'lodash/internal/createFindIndex'], function (exports, createFindIndex) {

	'use strict';

	var findLastIndex = createFindIndex['default'](true);

	exports['default'] = findLastIndex;

});