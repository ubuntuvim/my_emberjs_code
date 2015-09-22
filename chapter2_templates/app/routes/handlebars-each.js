//  app/routes/handlebars.js


import Ember from 'ember';

/**
 * 定义一个用于测试的对象数组
 */
export default Ember.Route.extend({
	//  重写model回调函数，初始化测试数据
	model: function() {
		var arr = [
			Ember.Object.create({ name: 'chen', age: 25}),
			Ember.Object.create({ name: 'i2cao.xyz', age: 0.2}),
			Ember.Object.create({ name: 'ibeginner.sinaapp.com', age: 1}),
			Ember.Object.create({ name: 'ubuntuvim.xyz', age: 3})
		];

		//  在前面的文章介绍过他们的不同之处：http://ibeginner.sinaapp.com/index.php?m=Home&c=Index&a=detail&id=e2ea5494bf3d121f25a825c40325c541
		arr.push({name: 'add_test', age: 1});  //Ember不建议使用这个方法新增数据
		arr.pushObject({name: 'pushObject', age: 2});  //官方建议的方法

		return arr;
	}
});
