define('lodash/collection/reduce', ['exports', 'lodash/internal/arrayReduce', 'lodash/internal/baseEach', 'lodash/internal/createReduce'], function (exports, arrayReduce, baseEach, createReduce) {

	'use strict';

	var reduce = createReduce['default'](arrayReduce['default'], baseEach['default']);

	exports['default'] = reduce;

});