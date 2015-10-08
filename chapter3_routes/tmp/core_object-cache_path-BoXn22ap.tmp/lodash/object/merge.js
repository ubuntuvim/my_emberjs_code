define('lodash/object/merge', ['exports', 'lodash/internal/baseMerge', 'lodash/internal/createAssigner'], function (exports, baseMerge, createAssigner) {

	'use strict';

	var merge = createAssigner['default'](baseMerge['default']);

	exports['default'] = merge;

});