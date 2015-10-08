define('lodash/object/forIn', ['exports', 'lodash/internal/baseFor', 'lodash/internal/createForIn'], function (exports, baseFor, createForIn) {

	'use strict';

	var forIn = createForIn['default'](baseFor['default']);

	exports['default'] = forIn;

});