define('lodash/collection/reduceRight', ['exports', 'lodash/internal/arrayReduceRight', 'lodash/internal/baseEachRight', 'lodash/internal/createReduce'], function (exports, arrayReduceRight, baseEachRight, createReduce) {

	'use strict';

	var reduceRight = createReduce['default'](arrayReduceRight['default'], baseEachRight['default']);

	exports['default'] = reduceRight;

});