define('lodash/collection/find', ['exports', 'lodash/internal/baseEach', 'lodash/internal/createFind'], function (exports, baseEach, createFind) {

	'use strict';

	var find = createFind['default'](baseEach['default']);

	exports['default'] = find;

});