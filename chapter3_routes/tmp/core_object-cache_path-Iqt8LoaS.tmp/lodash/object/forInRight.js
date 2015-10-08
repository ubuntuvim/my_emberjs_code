define('lodash/object/forInRight', ['exports', 'lodash/internal/baseForRight', 'lodash/internal/createForIn'], function (exports, baseForRight, createForIn) {

	'use strict';

	var forInRight = createForIn['default'](baseForRight['default']);

	exports['default'] = forInRight;

});