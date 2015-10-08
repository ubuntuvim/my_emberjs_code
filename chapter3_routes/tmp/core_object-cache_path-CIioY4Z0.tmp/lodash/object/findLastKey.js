define('lodash/object/findLastKey', ['exports', 'lodash/internal/baseForOwnRight', 'lodash/internal/createFindKey'], function (exports, baseForOwnRight, createFindKey) {

	'use strict';

	var findLastKey = createFindKey['default'](baseForOwnRight['default']);

	exports['default'] = findLastKey;

});