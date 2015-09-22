//  app/routes/myaction.js


import Ember from 'ember';

export default Ember.Route.extend({
	//  返回测试数据到页面
	model: function() {
		return { id:1, title: 'ACTIONS', body: "Your app will often need a way to let users interact with controls that change application state. For example, imagine that you have a template that shows a blog title, and supports expanding the post to show the body.If you add the {{action}} helper to an HTML element, when a user clicks the element, the named event will be sent to the template's corresponding component or controller." };
	}
});
