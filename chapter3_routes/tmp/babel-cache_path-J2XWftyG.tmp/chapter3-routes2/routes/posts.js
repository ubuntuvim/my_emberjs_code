//  app/routes/posts.js

import Ember from 'ember';

export default Ember.Route.extend({

	model: function model() {
		console.log('posts....');
		return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
	},

	actions: {
		// error: function(error, transition) {
		// 	console.log('error = ' + error.status);
		// 	//  打印error对象里的所有属性和方法名
		// 	for(var name in error){        
		//           console.log(name);
		//           // console.log('属性值或者方法体==》' + error[name]);
		//        }   
		//        alert(names);
		// 	if (error && error.status === 400) {
		// 		return this.transitionTo("about");
		// 	} else if (error.status === 404) {
		// 		return this.transitionTo("form");
		// 	} else {
		// 		console.log('else......');
		// 	}
		// }
	}
});