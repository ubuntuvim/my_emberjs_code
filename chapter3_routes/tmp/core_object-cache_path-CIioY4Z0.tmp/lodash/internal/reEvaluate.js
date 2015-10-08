define('lodash/internal/reEvaluate', ['exports'], function (exports) {

	'use strict';

	/** Used to match template delimiters. */
	var reEvaluate = /<%([\s\S]+?)%>/g;

	exports['default'] = reEvaluate;

});