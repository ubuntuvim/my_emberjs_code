//  app/helpers/my-helper.js

import Ember from 'ember';

// 对于命名参数使用namedArgs获取
export function myHelper(params, namedArgs) {
	console.log('namedArgs = ' + namedArgs);
	console.log('params = ' + params);
	console.log('=========================');
	return namedArgs.firstName + ", " + namedArgs.lastName;
}

// export function myHelper([arg1, arg2]) {
// 	console.log('p1 = ' + arg1 + ", p2 = " + arg2);
// 	return arg1 + " " + arg2;
// }

export default Ember.Helper.helper(myHelper);
