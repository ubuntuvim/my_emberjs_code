"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('chapter6-models/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, Ember, FirebaseAdapter) {

  'use strict';

  var inject = Ember['default'].inject;

  exports['default'] = FirebaseAdapter['default'].extend({
    firebase: inject.service(),
    namespace: 'api/test'
  });

});
define('chapter6-models/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'chapter6-models/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('chapter6-models/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'chapter6-models/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('chapter6-models/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter6-models/controllers/articles/article', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/article.js

	exports['default'] = Ember['default'].Controller.extend({
		actions: {
			// 根据文章id更新
			updateArticleById: function updateArticleById(params) {
				var title = this.get('model.title');
				var body = this.get('model.body');
				this.store.findRecord('article', params).then(function (art) {
					art.set('title', title);
					art.set('body', body);

					//  保存更新的值到Store
					art.save();
				});
			}
		}
	});

});
define('chapter6-models/controllers/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//   app/controllers/articles.js

	exports['default'] = Ember['default'].Controller.extend({

		actions: {

			//  表单提交，保存数据到Store。Store会自动更新到firebase
			saveItem: function saveItem() {
				var title = this.get('title');
				if ('undefined' === typeof title || '' === title.trim()) {
					this.set('tipInfo', "title不能为空");
					return;
				}

				var body = this.get('body');
				if ('undefined' === typeof body || '' === body.trim()) {
					this.set('tipInfo', "body不能为空");
					return;
				}
				var category = this.get('category');
				if ('undefined' === typeof category || '' === category.trim()) {
					this.set('tipInfo', "category不能为空");
					return;
				}
				var username = this.get('username');
				if ('undefined' === typeof username || '' === username.trim()) {
					this.set('tipInfo', "username不能为空");
					return;
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

				article.save(); //保存数据的到Store
				//  清空页面的input输入框
				this.set('title', "");
				this.set('body', "");
				this.set('category', "");
				this.set('username', "");
			},
			//  根据id属性值删除数据
			delById: function delById(params) {

				//  任意获取一个作为判断表单输入值
				if (params && confirm("你确定要删除这条数据吗？?")) {
					//  执行删除
					this.store.findRecord('article', params).then(function (art) {
						art.destroyRecord();
						alert('删除成功！');
					}, function (error) {
						alert('删除失败！');
					});
				} else {
					return;
				}
			}
		}
	});

});
define('chapter6-models/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter6-models/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'chapter6-models/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('chapter6-models/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, EmberFireInitializer) {

	'use strict';

	exports['default'] = EmberFireInitializer['default'];

});
define('chapter6-models/initializers/export-application-global', ['exports', 'ember', 'chapter6-models/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('chapter6-models/models/article', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	//   app/models/article.js

	exports['default'] = DS['default'].Model.extend({
		title: DS['default'].attr('string'),
		body: DS['default'].attr('string'),
		timestamp: DS['default'].attr('number'),
		category: DS['default'].attr('string'),
		//关联user，获取article的时候自动把关联的user获取出来
		author: DS['default'].belongsTo('user', { async: true })
	});

});
define('chapter6-models/models/comment', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  //  app/model/comment.js

  exports['default'] = DS['default'].Model.extend({
    post: DS['default'].belongsTo('post')
  });

});
define('chapter6-models/models/person', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	//  app/models/person.js

	exports['default'] = DS['default'].Model.extend({
		username: DS['default'].attr('string'),
		email: DS['default'].attr('string'),
		verified: DS['default'].attr('boolean', { defaultValue: false }), //指定默认值是false
		//  使用函数返回值作为默认值
		createAt: DS['default'].attr('string', { defaultValue: function defaultValue() {
				return new Date();
			} })
	});

});
define('chapter6-models/models/post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  //  app/models/post.js

  exports['default'] = DS['default'].Model.extend({
    comments: DS['default'].hasMany('comment')
  });

});
define('chapter6-models/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  //  app/models/user.js

  exports['default'] = DS['default'].Model.extend({
    username: DS['default'].attr('string'),
    timestamp: DS['default'].attr('number'),
    articles: DS['default'].hasMany('article') //关联article
  });

});
define('chapter6-models/router', ['exports', 'ember', 'chapter6-models/config/environment'], function (exports, Ember, config) {

  'use strict';

  //  app/router.js

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('store-example');
    this.route('articles', function () {
      this.route('article', { path: '/:article_id' });
    });
  });

  exports['default'] = Router;

});
define('chapter6-models/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/application.js

	exports['default'] = Ember['default'].Route.extend({
		// model: function() {

		// 	this.store.push({
		// 		data: [
		// 			{
		// 				id: 1000,
		// 				type: 'user',
		// 				attributes: {   //  设置model属性值
		// 					username: 'test name',
		// 					// articles:
		// 				}
		// 				// ,
		// 				// relationships: { articles:  }  //  设置两个model的关联关系
		// 			},
		// 			{
		// 				id: 2,
		// 				type: 'article',
		// 				attributes: {   //  设置model属性值
		// 					title: 'Calgary b/w I Can\'t Make You Love Me/Nick Of Time',
		// 			        body: 'Bon Iver',
		// 			        category: 'java'
		// 			        ,author: [ 1000 ]
		// 				}
		// 				// ,	
		// 				// relationships: [ 1000 ]  //  设置两个model的关联关系
		// 			}
		// 		]
		// 	});

		// 	return this.store.peekRecord('article', 2);
		// 	// .then(function(item) {
		// 	// 	return item;
		// 	// });
		// }
	});

});
define('chapter6-models/routes/articles/article', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/articles/article.js

	exports['default'] = Ember['default'].Route.extend({

		model: function model(params) {
			// console.log('params = ' + params.article_id);
			// 'chendequanroob@gmail.com'
			return this.store.findRecord('article', params.article_id);

			// return this.store.peekRecord('article', params.article_id);
		}
	});

});
define('chapter6-models/routes/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/articles.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			//  返回firebase数据库中的所有article
			return this.store.findAll('article');

			// return this.store.peekAll('article');

			//  使用query方法查询category为Java的数据
			// return this.store.query('article', { filter: { category: 'java' } })
			// 			.then(function(item) {
			// 				//  对匹配的数据做处理
			// 				return item;
			// 			});
		}
	});

});
define('chapter6-models/routes/store-example', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/store-example.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			// 从store中获取id为JzySrmbivaSSFG6WwOk的数据，这个数据是我在我的firebase中初始化好的
			return this.store.find('article', '-JzySrmbivaSSFG6WwOk');
		}
	});

});
define('chapter6-models/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	//  app/serializers/application.js

	exports['default'] = DS['default'].JSONSerializer.extend({
		serialize: function serialize(snapshot, options) {
			var json = this._super.apply(this, arguments); // ??
			json.data.attributes.cost = {
				amount: json.data.attributes.amount,
				currency: json.data.attributes.currency
			};

			delete json.data.attributes.amount;
			delete json.data.attributes.currency;

			return json;
		}
	});

});
define('chapter6-models/services/firebase', ['exports', 'emberfire/services/firebase', 'chapter6-models/config/environment'], function (exports, Firebase, config) {

	'use strict';

	Firebase['default'].config = config['default'];

	exports['default'] = Firebase['default'];

});
define('chapter6-models/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 16
            },
            "end": {
              "line": 6,
              "column": 63
            }
          },
          "moduleName": "chapter6-models/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Models");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 25
          }
        },
        "moduleName": "chapter6-models/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" //app/templates/application.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"class","navbar navbar-inverse navbar-fixed-top");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("\n            <ul class=\"nav navbar-nav\">\n                <li>{{#link-to 'about'}}about{{/link-to}}</li>\n       			<li>{{#link-to 'posts'}}posts{{/link-to}}</li>\n            </ul>\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        dom.setAttribute(el1,"style","margin-top: 70px;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" 项目中其他所有的模板都是application的子模板，所以其他模板都会渲染到这里的 outlet上 ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("   \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("small");
        var el2 = dom.createTextNode("author: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [8]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [10]),1,1);
        morphs[5] = dom.createMorphAt(fragment,14,14,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[6,16],[6,75]]]],
        ["content","outlet",["loc",[null,[19,0],[19,10]]]],
        ["content","model.title",["loc",[null,[22,4],[22,19]]]],
        ["content","model.body",["loc",[null,[24,0],[24,14]]]],
        ["content","model.author",["loc",[null,[26,15],[26,31]]]],
        ["content","model.author.username",["loc",[null,[29,0],[29,25]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter6-models/templates/articles/article', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 6
          }
        },
        "moduleName": "chapter6-models/templates/articles/article.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  app/templates/articles/article.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","body");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n更新测试");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\ntitle: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\nbody：");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("更新文章信息");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [6]);
        var element1 = dom.childAt(element0, [14]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[2] = dom.createMorphAt(element0,6,6);
        morphs[3] = dom.createMorphAt(element0,11,11);
        morphs[4] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["content","model.title",["loc",[null,[3,4],[3,19]]]],
        ["content","model.body",["loc",[null,[5,0],[5,14]]]],
        ["inline","input",[],["value",["subexpr","@mut",[["get","model.title",["loc",[null,[11,21],[11,32]]]]],[],[]]],["loc",[null,[11,7],[11,34]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","model.body",["loc",[null,[12,27],[12,37]]]]],[],[]],"cols","80","rows","3"],["loc",[null,[12,10],[12,58]]]],
        ["element","action",["updateArticleById",["get","model.id",["loc",[null,[13,37],[13,45]]]]],[],["loc",[null,[13,8],[13,47]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter6-models/templates/articles', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 18
              },
              "end": {
                "line": 12,
                "column": 5
              }
            },
            "moduleName": "chapter6-models/templates/articles.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" -- ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("small");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" -- ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("small");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]),0,0);
            return morphs;
          },
          statements: [
            ["content","item.title",["loc",[null,[11,6],[11,20]]]],
            ["content","item.category",["loc",[null,[11,31],[11,48]]]],
            ["content","item.author.username",["loc",[null,[11,67],[11,91]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 3
            },
            "end": {
              "line": 15,
              "column": 3
            }
          },
          "moduleName": "chapter6-models/templates/articles.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","list-group-item");
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("设置路由，路由的层级与router.js里定义的要一致 ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("					");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("删除");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [5]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0,3,3);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["block","link-to",["articles.article",["get","item.id",["loc",[null,[10,48],[10,55]]]]],[],0,null,["loc",[null,[10,18],[12,17]]]],
          ["element","action",["delById",["get","item.id",["loc",[null,[13,32],[13,39]]]]],[],["loc",[null,[13,13],[13,41]]]]
        ],
        locals: ["item"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "chapter6-models/templates/articles.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  app/templates/articles.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-4 col-xs-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","list-group");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n				title：");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				body：");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				category: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				author: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        var el6 = dom.createTextNode("保存");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("font");
        dom.setAttribute(el5,"color","red");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-8 col-xs-8");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element4, [17]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
        morphs[1] = dom.createMorphAt(element4,1,1);
        morphs[2] = dom.createMorphAt(element4,6,6);
        morphs[3] = dom.createMorphAt(element4,9,9);
        morphs[4] = dom.createMorphAt(element4,14,14);
        morphs[5] = dom.createElementMorph(element5);
        morphs[6] = dom.createMorphAt(dom.childAt(element4, [19]),0,0);
        morphs[7] = dom.createMorphAt(element4,21,21);
        morphs[8] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[7,11],[7,16]]]]],[],0,null,["loc",[null,[7,3],[15,12]]]],
        ["inline","input",[],["value",["subexpr","@mut",[["get","title",["loc",[null,[20,24],[20,29]]]]],[],[]]],["loc",[null,[20,10],[20,31]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","body",["loc",[null,[21,31],[21,35]]]]],[],[]],"cols","40","rows","3"],["loc",[null,[21,14],[21,56]]]],
        ["inline","input",[],["value",["subexpr","@mut",[["get","category",["loc",[null,[22,28],[22,36]]]]],[],[]]],["loc",[null,[22,14],[22,38]]]],
        ["inline","input",[],["value",["subexpr","@mut",[["get","username",["loc",[null,[24,26],[24,34]]]]],[],[]]],["loc",[null,[24,12],[24,36]]]],
        ["element","action",["saveItem"],[],["loc",[null,[25,12],[25,34]]]],
        ["content","tipInfo",["loc",[null,[26,22],[26,33]]]],
        ["content","debugger",["loc",[null,[27,4],[27,16]]]],
        ["content","outlet",["loc",[null,[32,2],[32,12]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter6-models/templates/store-example', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "chapter6-models/templates/store-example.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","body");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["content","model.title",["loc",[null,[1,4],[1,19]]]],
        ["content","model.body",["loc",[null,[4,0],[4,14]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter6-models/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/controllers/articles/article.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers/articles');
  QUnit.test('controllers/articles/article.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/articles/article.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/controllers/articles.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/articles.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/articles.js should pass jshint.\ncontrollers/articles.js: line 71, col 29, \'error\' is defined but never used.\n\n1 error'); 
  });

});
define('chapter6-models/tests/helpers/resolver', ['exports', 'ember/resolver', 'chapter6-models/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('chapter6-models/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/helpers/start-app', ['exports', 'ember', 'chapter6-models/app', 'chapter6-models/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('chapter6-models/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/models/article.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/article.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/article.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/models/comment.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/comment.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/comment.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/models/person.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/person.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/person.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/models/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/post.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/models/user.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/user.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/user.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/routes/articles/article.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/articles');
  QUnit.test('routes/articles/article.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/articles/article.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/routes/articles.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/articles.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/articles.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/routes/store-example.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/store-example.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/store-example.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/serializers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'serializers/application.js should pass jshint.\nserializers/application.js: line 6, col 35, \'options\' is defined but never used.\nserializers/application.js: line 6, col 25, \'snapshot\' is defined but never used.\n\n2 errors'); 
  });

});
define('chapter6-models/tests/test-helper', ['chapter6-models/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('chapter6-models/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/controllers/articles/article-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:articles/article', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter6-models/tests/unit/controllers/articles/article-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers/articles');
  QUnit.test('unit/controllers/articles/article-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/articles/article-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/controllers/articles-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:articles', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter6-models/tests/unit/controllers/articles-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/articles-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/articles-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/models/article-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('article', 'Unit | Model | article', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter6-models/tests/unit/models/article-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/article-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/article-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/models/comment-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('comment', 'Unit | Model | comment', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter6-models/tests/unit/models/comment-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/comment-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/comment-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/models/person-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('person', 'Unit | Model | person', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter6-models/tests/unit/models/person-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/person-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/person-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/models/post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter6-models/tests/unit/models/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/post-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/models/users-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('users', 'Unit | Model | users', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter6-models/tests/unit/models/users-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/users-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/users-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter6-models/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/routes/articles/article-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:articles/article', 'Unit | Route | articles/article', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter6-models/tests/unit/routes/articles/article-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/articles');
  QUnit.test('unit/routes/articles/article-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/articles/article-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/routes/articles-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:articles', 'Unit | Route | articles', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter6-models/tests/unit/routes/articles-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/articles-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/articles-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/routes/store-example-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:store-example', 'Unit | Route | store example', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter6-models/tests/unit/routes/store-example-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/store-example-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/store-example-test.js should pass jshint.'); 
  });

});
define('chapter6-models/tests/unit/serializers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  ember_qunit.test('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

});
define('chapter6-models/tests/unit/serializers/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.'); 
  });

});
define('chapter6-models/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, FirebaseProvider) {

	'use strict';

	exports['default'] = FirebaseProvider['default'];

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('chapter6-models/config/environment', ['ember'], function(Ember) {
  var prefix = 'chapter6-models';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("chapter6-models/tests/test-helper");
} else {
  require("chapter6-models/app")["default"].create({"name":"chapter6-models","version":"0.0.0+79454bcf"});
}

/* jshint ignore:end */
//# sourceMappingURL=chapter6-models.map