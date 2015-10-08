//  app/router.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.route('about');
    // 注意：访问的URL可以写favs但是项目中如果是使用route的地方仍然是使用favorites
    // this.route('favorites', { path: '/favs' });

    this.route('posts', function () {
        this.route('post', { path: '/:post_id' });
        // this.route('comments', { resetNamespace: true}, function() {
        //     this.route('new');
        // });
    });

    //this.route('posts');
});

export default Router;