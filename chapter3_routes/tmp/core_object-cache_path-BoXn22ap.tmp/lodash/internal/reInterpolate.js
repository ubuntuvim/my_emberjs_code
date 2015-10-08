define('lodash/internal/reInterpolate', ['exports'], function (exports) {

	'use strict';

	/** Used to match template delimiters. */
	var reInterpolate = /<%=([\s\S]+?)%>/g;

	exports['default'] = reInterpolate;

});