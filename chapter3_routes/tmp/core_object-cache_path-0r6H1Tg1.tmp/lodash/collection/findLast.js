define('lodash/collection/findLast', ['exports', 'lodash/internal/baseEachRight', 'lodash/internal/createFind'], function (exports, baseEachRight, createFind) {

	'use strict';

	var findLast = createFind['default'](baseEachRight['default'], true);

	exports['default'] = findLast;

});