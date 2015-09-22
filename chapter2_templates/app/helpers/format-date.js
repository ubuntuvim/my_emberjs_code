//  app/helpers/format-data.js

import Ember from 'ember';

/**
 * 注意：方法名字是文件名去掉中划线变大写，驼峰式写法
 * 或者你也可以直接作为helper的内部函数
 * @param  {[type]} params 从助手{{format-data}}传递过来的参数
 */
// export function formatDate(params/*, hash*/) {
// 	console.log('params = ' + params);
// 	// params = params.toGMTString();
//     var d = Date.parse(params);
//     var dd = new Date(parseInt(d)).toLocaleString().replace(/:\d{1,2}$/,' ');  //  2015/9/21 下午11:21
//     // console.log('dd = ' + dd);
//     var v = dd.replace("/", "-").replace("/", "-").substr(0, 9);
//     // console.log('v = ' + v);
//     return params;
// }

export default Ember.Helper.helper(function formatDate(params/*, hash*/) {
    var d = Date.parse(params);
    var dd = new Date(parseInt(d)).toLocaleString().replace(/:\d{1,2}$/,' ');  //  2015/9/21 下午11:21
    var v = dd.replace("/", "-").replace("/", "-").substr(0, 9);
    return v;
});
