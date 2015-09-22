import Ember from 'ember';

export default Ember.Component.extend({
	//  控制页面文章详细内容是否显示
	isShowingBody: false,
	actions: {
		showDetailInfo: function() {
			// toggleProperty方法直接把isShowingBody设置为相反值
			// toggleProperty方法详情：http://devdocs.io/ember/classes/ember.observable#method_toggleProperty
			// this.toggleProperty('isShowingBody');
			
			// 变量作用域问题
			var isShowingBody = this.get('isShowingBody');
			if (isShowingBody) {
				this.set('isShowingBody', false);	
			} else {
				this.set('isShowingBody', true);
			}

		},

		hitMe: function(m) {  //  参数的名字可以任意
			console.log('The title is ' + m.title);
			console.log('The body is ' + m.body);
		},

		triggerMe: function() {
			console.log('触发mouseover事件。。。。');
		},

		pressALTKeyTiggerMe: function() {
			console.log('pressALTKeyTiggerMe event tiggered by press alt...');
		}
	}
});
