//  app/views/binding-element-attributes.js

import Ember from 'ember';

export default Ember.View.extend({
});

//  下面是官方给的代码，但很明显看出来这种使用方式不是2.0版本的！！
//  2.0版本的写法还在学习中，后续在补上，现在为了演示模板效果暂时这么写！毕竟本文的重点还是在模板属性的绑定上

//  绑定input
Ember.TextField.reopen({
	attributeBindings: ['data-toggle', 'data-placement']
});

//  绑定link-to
Ember.LinkComponent.reopen({
	attributeBindings: ['data-toggle']
});
