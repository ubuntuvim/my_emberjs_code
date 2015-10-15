//  app/controllers/comments.js

import Ember from 'ember';

export default Ember.Controller.extend({
	postController: Ember.inject.controller('post'),
	post: Ember.computed.reads('postController.model')
});