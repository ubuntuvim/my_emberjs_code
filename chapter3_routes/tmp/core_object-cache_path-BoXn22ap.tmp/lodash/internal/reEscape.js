define('lodash/internal/reEscape', ['exports'], function (exports) {

	'use strict';

	/** Used to match template delimiters. */
	var reEscape = /<%-([\s\S]+?)%>/g;

	exports['default'] = reEscape;

});