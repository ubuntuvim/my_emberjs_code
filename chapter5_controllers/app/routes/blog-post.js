//  app/routes/blog-post.js

import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var blogPost = this.store.createRecord('blog-post', {
			title: 'DEFINING A COMPONENT',  //  属性默认为string类型，可以不指定
			intro: "Components must have at least one dash in their name. ",
			body: "Components must have at least one dash in their name. So blog-post is an acceptable name, and so is audio-player-controls, but post is not. This prevents clashes with current or future HTML element names, aligns Ember components with the W3C Custom Elements spec, and ensures Ember detects the components automatically.",
			author: 'ubuntuvim'
		});
		// 直接返回一个model，或者你可以返回promises，
		return blogPost;
	}
});