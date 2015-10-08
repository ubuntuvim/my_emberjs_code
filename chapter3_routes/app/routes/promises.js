//  app/routes/promises.js

import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel() {
		// 注意Jquery的Ajax方法返回的也是promises
		var promiese = Ember.$.getJSON('https://www.my-example.com');
		promiese.then(this.fetchPhotoOfUsers, this.fetchPhotoOfUsersError)
				.then(this.applyInstagramFilters, this.applyInstagramFiltersError)
				.then(this.uploadThrendyPhotAlbum, this.uploadThrendyPhotAlbumError)
				.then(this.displaySuccessMessage, this.handleErrors);

	},
	fetchPhotoOfUsers: function(){
		console.log('fetchPhotoOfUsers');
	},
	fetchPhotoOfUsersError: function() {
		console.log('fetchPhotoOfUsersError');
	},
	applyInstagramFilters: function() {
		console.log('applyInstagramFilters');
	},
	applyInstagramFiltersError: function() {
		console.log('applyInstagramFiltersError');
	},
	uploadThrendyPhotAlbum: function() {
		console.log('uploadThrendyPhotAlbum');
	},
	uploadThrendyPhotAlbumError: function() {
		console.log('uploadThrendyPhotAlbumError');
	},
	displaySuccessMessage: function() {
		console.log('displaySuccessMessage');
	},
	handleErrors: function() {
		console.log('handleErrors');
	}



	// beforeModel: function() {
	// 	console.log('execute model()');

	// 	var promise = this.fetchTheAnswer();
	// 	promise.then(this.fulfill, this.reject);
	// },

	// //  promises获取结果成功时执行
	// fulfill: function(answer) {
	//   console.log("The answer is " + answer);
	// },

	// //  promises获取结果失败时执行
	// reject: function(reason) {
	//   console.log("Couldn't get the answer! Reason: " + reason);
	// },

	// fetchTheAnswer: function() {
	// 	return new Promise(function(fulfill, reject){
	// 		return fulfill('success');  //如果返回的是fulfill则表示promises执行成功
	// 		//return reject('failure');  //如果返回的是reject则表示promises执行失败
	// 	});
	// }
});
