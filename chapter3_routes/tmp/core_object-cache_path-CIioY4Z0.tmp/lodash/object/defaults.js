define('lodash/object/defaults', ['exports', 'lodash/object/assign', 'lodash/internal/assignDefaults', 'lodash/internal/createDefaults'], function (exports, assign, assignDefaults, createDefaults) {

	'use strict';

	var defaults = createDefaults['default'](assign['default'], assignDefaults['default']);

	exports['default'] = defaults;

});