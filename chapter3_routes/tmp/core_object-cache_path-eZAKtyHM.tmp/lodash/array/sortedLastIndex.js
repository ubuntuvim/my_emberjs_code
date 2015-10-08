define('lodash/array/sortedLastIndex', ['exports', 'lodash/internal/createSortedIndex'], function (exports, createSortedIndex) {

	'use strict';

	var sortedLastIndex = createSortedIndex['default'](true);

	exports['default'] = sortedLastIndex;

});