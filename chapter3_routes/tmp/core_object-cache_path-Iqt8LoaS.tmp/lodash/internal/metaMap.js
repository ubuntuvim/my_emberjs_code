define('lodash/internal/metaMap', ['exports', 'lodash/internal/getNative', 'lodash/internal/root'], function (exports, getNative, root) {

	'use strict';

	var WeakMap = getNative['default'](root['default'], 'WeakMap');

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap();

	exports['default'] = metaMap;

});