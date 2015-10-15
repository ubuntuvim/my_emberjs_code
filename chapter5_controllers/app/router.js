//  router.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog-post');
  this.route('post', { path: '/posts/:post_id' }, function() {
    this.route('comments');
  });
});

export default Router;