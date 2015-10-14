//  app/components/padding-properties-to-component.js

import Ember from 'ember';

export default Ember.Component.extend({
	// 指定位置参数为参数数组
	positionalParams: 'params',
	
	title: Ember.computed('params.[]', function() {
		return this.get('params')[0];  //获取第一个参数
	}),
	body: Ember.computed('params.[]', function() {
		return this.get('params')[1];  //获取第二个参数
	}),
	third: Ember.computed('params.[]', function() {
		return this.get('params')[2];  //获取第三个参数
	}),
	fourth: Ember.computed('params.[]', function() {
		return this.get('params')[3];  //获取第四个参数
	})
});
