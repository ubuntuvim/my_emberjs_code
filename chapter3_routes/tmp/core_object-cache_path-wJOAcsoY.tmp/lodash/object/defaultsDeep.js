define('lodash/object/defaultsDeep', ['exports', 'lodash/internal/createDefaults', 'lodash/object/merge', 'lodash/internal/mergeDefaults'], function (exports, createDefaults, merge, mergeDefaults) {

	'use strict';

	var defaultsDeep = createDefaults['default'](merge['default'], mergeDefaults['default']);

	exports['default'] = defaultsDeep;

});