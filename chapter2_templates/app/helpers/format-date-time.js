// app/helpers/format-date-time.js

import Ember from 'ember';

export function formatDateTime(params, hash) {
	//  参数的顺序跟模板{{format-date-time currentDate cDate currentTime}}上使用顺序一致，
	//  cDate比currentTime先，所以第一个参数是cDate
	console.log('params[0] = ' + params[0]);  //第一个参数是cDate,
	console.log('params[1] = ' + params[1]);  //  第二个是currentTime
	console.log('hash.format = ' + hash.format);
	console.log('hash.locale = ' + hash.locale);
	console.log('------------------------------------');

  	return params;
}

export default Ember.Helper.helper(formatDateTime);
