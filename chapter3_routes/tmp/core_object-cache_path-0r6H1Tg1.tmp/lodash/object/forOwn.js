define('lodash/object/forOwn', ['exports', 'lodash/internal/baseForOwn', 'lodash/internal/createForOwn'], function (exports, baseForOwn, createForOwn) {

	'use strict';

	var forOwn = createForOwn['default'](baseForOwn['default']);

	exports['default'] = forOwn;

});