define('chapter3-routes2/router', ['exports', 'ember', 'chapter3-routes2/config/environment'], function (exports, Ember, config) {

  'use strict';

  //  app/router.js

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('about');
    // 注意：访问的URL可以写favs但是项目中如果是使用route的地方仍然是使用favorites
    this.route('favorites', { path: '/favs' });

    this.route('posts', function () {
      this.route('post', { path: '/:post_id' });
      // this.route('comments', { resetNamespace: true}, function() {
      //     this.route('new');
      // });
    });

    this.route('form');
    this.route('login');
    this.route('auth');
    this.route('posts-loading');
    this.route('articles', function () {
      this.route('article', { path: "/:article_id" });
      // this.route('article');
    });
    this.route('promises');
  });

  exports['default'] = Router;

});