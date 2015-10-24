//   app/controllers/articles.js

import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		//  表单提交，保存数据到Store。Store会自动更新到firebase
		saveItem: function() {
			var title = this.get('title');
			if ('undefined' === typeof(title) || '' === title.trim()) {
				this.set('tipInfo', "title不能为空");
				return ;
			}

			var body = this.get('body');
			if ('undefined' === typeof(body) || '' === body.trim()) {
				this.set('tipInfo', "body不能为空");
				return ;
			}
			var category = this.get('category');
			if ('undefined' === typeof(category) || '' === category.trim()) {
				this.set('tipInfo', "category不能为空");
				return ;
			}
			var username = this.get('username');
			if ('undefined' === typeof(username) || '' === username.trim()) {
				this.set('tipInfo', "username不能为空");
				return ;
			}

			// 创建user
			var user = this.store.createRecord('user', {
				username: username,
				timestamp: new Date().getTime()
			});
			//  必须要执行这句代码，否则user数据不能保存到Store，
			//  否则article通过user的id查找不到user
			user.save();

			//  创建article
			var article = this.store.createRecord('article', {
				title: title,
				body: body,
				category: category,
				timestamp: new Date().getTime()
				// ,
				// author: user   //设置关联
			});

			// 第二种设置关联关系方法，在外部手动调用set方法设置
			article.set('author', user);

			article.save();  //保存数据的到Store
			//  清空页面的input输入框
			this.set('title', "");
			this.set('body', "");
			this.set('category', "");
			this.set('username', "");
		},
		//  根据id属性值删除数据
		delById : function(params) {

	    	//  任意获取一个作为判断表单输入值
	        if (params && confirm("你确定要删除这条数据吗？?")) {
	            //  执行删除
	            this.store.findRecord('article', params).then(function(art) {
	            	art.destroyRecord();
	            	alert('删除成功！');
	            }, function(error) {
	            	alert('删除失败！');
	            });
	        } else {
	            return;
	        }

		}
	}
});
