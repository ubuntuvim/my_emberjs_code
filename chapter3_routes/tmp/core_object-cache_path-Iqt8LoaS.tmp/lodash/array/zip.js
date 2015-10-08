define('lodash/array/zip', ['exports', 'lodash/function/restParam', 'lodash/array/unzip'], function (exports, restParam, unzip) {

	'use strict';

	var zip = restParam['default'](unzip['default']);

	exports['default'] = zip;

});