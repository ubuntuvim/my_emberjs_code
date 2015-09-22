//  app/routers.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType	
});

Router.map(function() {
  // this.route('handlebarsConditionsExpRoute');
  // this.route('handlebars-each');
  // this.route('store-categories');
  // this.route('binding-element-attributes');

  //  link-to实例理由配置
  // this.route('link-to-helper-example', function() {
  //  this.route('edit', {path: '/:link-to-helper-example_id'});
  // });

  // this.route('posts', function() {
  //     //指定子路由，:post_id会自动转换为数据的id
  //  this.route('detail', {path: '/:post_id'}, function() {
  //     //增加一个comments路由
  //     this.route('comments');
  //     // 注意区分与前面的设置方式，comment渲染之后直接被comments/:comment_id替换了，会得到如posts/1/comments/2这种形式的URL
  //     this.route('comment', {path: 'comments/:comment_id'});
  //   });
  // });


  this.route('posts', function() {
      //指定子路由，:post_id会自动转换为数据的id
    this.route('detail', {path: '/:post_id'}, function() {
      //增加一个comments路由
      this.route('comments', function() {
        // 在comments下面再增加一个子路由comment，并且路由是个动态字段comment_id
        this.route('comment', {path: '/:comment_id'});
      });
      
    });
  });

  this.route('myaction');
  this.route('form-helper');
  this.route('dev-helper');
  this.route('tools-helper');
});

export default Router;
