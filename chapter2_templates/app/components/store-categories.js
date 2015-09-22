import Ember from 'ember';

export default Ember.Component.extend({
	willRender: function() {
		//  设置一个对象到属性“categories”上，并且设置到categories属性上的对象结构是：key为字符串，value为数组
		this.set('categories', {
	      'Bourbons': ['Bulleit', 'Four Roses', 'Woodford Reserve'],
	      'Ryes': ['WhistlePig', 'High West']
	    });
	},
	actions: {
		addCategory: function(category) {
			let categories = this.get('categories');
			categories[category] = [];

			this.rerender();
		}
	},
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
