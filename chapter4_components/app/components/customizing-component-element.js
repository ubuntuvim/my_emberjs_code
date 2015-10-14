//  app/components/customizing-component-element.js

import Ember from 'ember';

export default Ember.Component.extend({
	// 使用tabName属性指定渲染之后HTML标签
	// 注意属性的值必须是标准的HTML标签名
	tagName: 'nav',
	classNames: ['primary', 'my-class-name'],  //指定包裹元素的CSS类
	classNameBindings: ['urgent', 'secondClassName:scn', 'isEnabled:enabled:disabled', 'stringValue'],
	urgent: true,
	secondClassName: true,
	isEnabled: true,  //如果这个属性为true，类enabled将被渲染到nav标签上，如果属性值为false类disabled将被渲染到nav标签上，类似于三目运算
	stringValue: 'renderedClassName'
});
