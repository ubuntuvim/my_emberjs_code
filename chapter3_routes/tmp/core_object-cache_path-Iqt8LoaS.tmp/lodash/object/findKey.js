define('lodash/object/findKey', ['exports', 'lodash/internal/baseForOwn', 'lodash/internal/createFindKey'], function (exports, baseForOwn, createFindKey) {

	'use strict';

	var findKey = createFindKey['default'](baseForOwn['default']);

	exports['default'] = findKey;

});