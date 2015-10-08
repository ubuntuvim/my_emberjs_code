"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('chapter3-routes2/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, Ember, FirebaseAdapter) {

  'use strict';

  //  app/adapters/application.js

  var inject = Ember['default'].inject;

  exports['default'] = FirebaseAdapter['default'].extend({
    firebase: inject.service()
  });
  // firebase: new FireBase(config.firebase)

});
define('chapter3-routes2/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'chapter3-routes2/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

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
define('chapter3-routes2/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'chapter3-routes2/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('chapter3-routes2/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter3-routes2/controllers/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/articles.js

	exports['default'] = Ember['default'].Controller.extend({
		queryParams: ['category'],
		category: null,

		filterArticles: Ember['default'].computed('category', 'model', function () {
			var category = this.get('category');
			var articles = this.get('model');

			if (category) {
				//如果参数为null则显示全部数据
				console.log('articles1 = ' + articles);

				return articles.filterBy('category', articles);
				// this.set('model', articles.findBy('category', category));
			} else {
					console.log('articles2 = ' + articles);
					// this.set('model', articles.find());
					return articles;
				}
		}),
		// queryField: Ember.computed.oneWay('category'),
		// actions: {
		//   search: function() {
		//     this.set('query', this.get('queryField'));
		//   }
		// },

		actions: {
			search: function search() {

				console.log('12121 = ' + this.get('queryField'));
				// this.set('category', this.get('category'));
				this.set('filterArticles', this.get('queryField'), this.get('model'));
				// this.set('category', this.get('queryField'));
			},

			saveItem: function saveItem() {
				var newActicle = this.store.createRecord('article', {
					title: this.get('title'),
					body: this.get('body'),
					category: this.get('category'),
					timestamp: new Date().getTime()
				});
				newActicle.save();
			}
		}

	});

});
define('chapter3-routes2/controllers/auth', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/auth.js

	exports['default'] = Ember['default'].Controller.extend({
		// userIsLogin: false
	});

});
define('chapter3-routes2/controllers/form', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/form.js

	exports['default'] = Ember['default'].Controller.extend({
		firstName: 'chen',
		lastName: 'ubuntuvim'
	});

});
define('chapter3-routes2/controllers/login', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/login.js

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			login: function login() {
				//  获取跳转过来之前路由中设置的transition对象
				var transitionObj = this.get('transitionObj');
				console.log('transitionObj = ' + transitionObj);
				if (transitionObj) {
					this.set("transitionObj", null);
					transitionObj.retry();
				} else {
					//  转回首页
					this.transitionToRoute('index');
				}
			}
		}
	});

});
define('chapter3-routes2/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter3-routes2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'chapter3-routes2/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('chapter3-routes2/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, EmberFireInitializer) {

	'use strict';

	exports['default'] = EmberFireInitializer['default'];

});
define('chapter3-routes2/initializers/export-application-global', ['exports', 'ember', 'chapter3-routes2/config/environment'], function (exports, Ember, config) {

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

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('chapter3-routes2/models/article', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	//   app/models/article.js

	exports['default'] = DS['default'].Model.extend({
		title: DS['default'].attr('string'),
		body: DS['default'].attr('string'),
		timestamp: DS['default'].attr('number'),
		category: DS['default'].attr('string')
	});

});
define('chapter3-routes2/models/post', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		title: DS['default'].attr('string'),
		body: DS['default'].attr('string'),
		timestamp: DS['default'].attr('number')
	});

});
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
  });

  exports['default'] = Router;

});
define('chapter3-routes2/routes/about', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chapter3-routes2/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({

		ations: {}

	});

});
define('chapter3-routes2/routes/articles/article', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/articles/article.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			return this.store.findRecord('article', params.post_id);
		}
	});

});
define('chapter3-routes2/routes/articles', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/article.js

	exports['default'] = Ember['default'].Route.extend({

		model: function model(params) {
			// console.log('route params.category = ' + params.category);
			// if (!params.category) {
			//   return this.store.find('article'); // no results;
			// }
			// this.controllerFor('articles').set('category', params.category);
			// return this.store.find('article');

			var hash = {};
			var uid = params.category;
			if (uid) {
				hash.category = uid;
			}
			return this.store.query('article', hash);
		},

		actions: {
			queryParamsDidChange: function queryParamsDidChange() {
				// opt into full refresh
				this.refresh();
			}
		}
	});

});
define('chapter3-routes2/routes/auth', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/auth.js

	exports['default'] = Ember['default'].Route.extend({

		beforeModel: function beforeModel(transition) {
			// 在名为auth的controller设置了userIsLogin为false，默认是未登录
			if (!this.controllerFor("auth").get('userIsLogin')) {
				var loginController = this.controllerFor("login");
				// 保存transition对象
				loginController.set("transitionObj", transition);
				console.log('to login page...');
				this.transitionTo("login"); // 跳转到路由login
			}
		}
	});

});
define('chapter3-routes2/routes/favorites', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/favorites.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return Ember['default'].REVP.hash({
				songs: this.store.find('song'),
				albums: this.store.find('slbum')
			});
		}
	});

});
define('chapter3-routes2/routes/form', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/form.js

	exports['default'] = Ember['default'].Route.extend({
		actions: {
			willTransition: function willTransition(transition) {
				//  如果是使用this.get('key')获取不了页面输入值，因为不是通过action提交表单的
				var v = this.controller.get('firstName');
				//  任意获取一个作为判断表单输入值
				if (v && !confirm("你确定要离开这个页面吗？?")) {
					transition.abort();
				} else {
					return true;
				}
			}
		}
	});

});
define('chapter3-routes2/routes/login', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chapter3-routes2/routes/posts/post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/routes/posts/post.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			console.log('params = ' + params.post_id);
			return this.store.findRecord('post', params.post_id);
		}
	});

});
define('chapter3-routes2/routes/posts-loading', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		postsLoadingFlag: true
	});

});
define('chapter3-routes2/routes/posts', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts.js

	exports['default'] = Ember['default'].Route.extend({

		model: function model() {
			console.log('posts....');
			return Ember['default'].$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
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

});
define('chapter3-routes2/services/firebase', ['exports', 'emberfire/services/firebase', 'chapter3-routes2/config/environment'], function (exports, Firebase, config) {

	'use strict';

	Firebase['default'].config = config['default'];

	exports['default'] = Firebase['default'];

});
define('chapter3-routes2/templates/about', ['exports'], function (exports) {

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
            "line": 1,
            "column": 15
          }
        },
        "moduleName": "chapter3-routes2/templates/about.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("这个是about模板！");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 16
            },
            "end": {
              "line": 7,
              "column": 61
            }
          },
          "moduleName": "chapter3-routes2/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
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
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 20
            },
            "end": {
              "line": 10,
              "column": 45
            }
          },
          "moduleName": "chapter3-routes2/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("about");
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
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 14
            },
            "end": {
              "line": 11,
              "column": 39
            }
          },
          "moduleName": "chapter3-routes2/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("posts");
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
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 20
            },
            "end": {
              "line": 14,
              "column": 45
            }
          },
          "moduleName": "chapter3-routes2/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Login");
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
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "chapter3-routes2/templates/application.hbs"
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
        dom.setAttribute(el1,"class","navbar navbar-default navbar-fixed-top");
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
        var el4 = dom.createComment("  <a class=\"navbar-brand\" href=\"#\">Blog</a> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","nav navbar-nav");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n       			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","nav navbar-nav navbar-right");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#");
        var el6 = dom.createTextNode("Logout");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
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
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5, 1]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[7,16],[7,73]]]],
        ["block","link-to",["about"],[],1,null,["loc",[null,[10,20],[10,57]]]],
        ["block","link-to",["posts"],[],2,null,["loc",[null,[11,14],[11,51]]]],
        ["block","link-to",["login"],[],3,null,["loc",[null,[14,20],[14,57]]]],
        ["content","outlet",["loc",[null,[22,0],[22,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('chapter3-routes2/templates/articles/article', ['exports'], function (exports) {

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
            "line": 4,
            "column": 21
          }
        },
        "moduleName": "chapter3-routes2/templates/articles/article.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/articles/article.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        return morphs;
      },
      statements: [
        ["content","model.title",["loc",[null,[3,4],[3,19]]]],
        ["content","model.body",["loc",[null,[4,3],[4,17]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/articles-loading', ['exports'], function (exports) {

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
            "line": 3,
            "column": 47
          }
        },
        "moduleName": "chapter3-routes2/templates/articles-loading.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/articles-loading.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","assets/images/loading/loading.gif");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/articles', ['exports'], function (exports) {

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
                "line": 18,
                "column": 3
              },
              "end": {
                "line": 18,
                "column": 74
              }
            },
            "moduleName": "chapter3-routes2/templates/articles.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("--");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
            return morphs;
          },
          statements: [
            ["content","item.title",["loc",[null,[18,40],[18,54]]]],
            ["content","item.category",["loc",[null,[18,56],[18,73]]]]
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
              "line": 16,
              "column": 1
            },
            "end": {
              "line": 20,
              "column": 1
            }
          },
          "moduleName": "chapter3-routes2/templates/articles.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","link-to",["articles.article",["get","item",["loc",[null,[18,33],[18,37]]]]],[],0,null,["loc",[null,[18,3],[18,86]]]]
        ],
        locals: ["item"],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 62
            }
          },
          "moduleName": "chapter3-routes2/templates/articles.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Java ");
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
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "chapter3-routes2/templates/articles.hbs"
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
        dom.setAttribute(el1,"class","col-md-4 col-xs-4");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("\n<div>\n{{input value=title}}<br>\n{{textarea value=body cols=\"80\" rows=\"3\"}}<br>\n{{input value=category}}<br>\n\n<button {{action 'saveItem'}}>Save</button>\n<br><br>\n</div>	\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("java");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("php");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4,"type","submit");
        dom.setAttribute(el4,"value","Search");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-8 col-xs-8");
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
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [7]);
        var element3 = dom.childAt(element1, [9]);
        var element4 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(element1,1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createElementMorph(element3);
        morphs[5] = dom.createElementMorph(element4);
        morphs[6] = dom.createMorphAt(element4,1,1);
        morphs[7] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[16,9],[16,14]]]]],[],0,null,["loc",[null,[16,1],[20,10]]]],
        ["block","link-to",["articles",["subexpr","query-params",[],["category","java"],["loc",[null,[23,24],[23,54]]]]],[],1,null,["loc",[null,[23,2],[23,74]]]],
        ["inline","linkTo",["category=php",["subexpr","query-params",[],["category","php"],["loc",[null,[27,26],[27,55]]]]],[],["loc",[null,[27,2],[27,57]]]],
        ["element","action",["filterByCategory","java"],[],["loc",[null,[29,9],[29,46]]]],
        ["element","action",["filterByCategory","php"],[],["loc",[null,[30,9],[30,45]]]],
        ["element","action",["search"],["on","submit"],["loc",[null,[34,6],[34,37]]]],
        ["inline","input",[],["value",["subexpr","@mut",[["get","queryField",["loc",[null,[35,20],[35,30]]]]],[],[]]],["loc",[null,[35,6],[35,32]]]],
        ["content","outlet",["loc",[null,[42,0],[42,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chapter3-routes2/templates/auth', ['exports'], function (exports) {

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
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "chapter3-routes2/templates/auth.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/favorite-posts', ['exports'], function (exports) {

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
            "line": 1,
            "column": 20
          }
        },
        "moduleName": "chapter3-routes2/templates/favorite-posts.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("这里是 favoritePosts 模板");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/favorites', ['exports'], function (exports) {

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
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chapter3-routes2/templates/favorites.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","item.name",["loc",[null,[7,5],[7,18]]]]
        ],
        locals: ["item"],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "chapter3-routes2/templates/favorites.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","item.name",["loc",[null,[14,5],[14,18]]]]
        ],
        locals: ["item"],
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
            "line": 16,
            "column": 5
          }
        },
        "moduleName": "chapter3-routes2/templates/favorites.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  app/templates/favorites.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Song list");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Album list");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [10]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model.songs",["loc",[null,[6,8],[6,19]]]]],[],0,null,["loc",[null,[6,0],[8,9]]]],
        ["block","each",[["get","model.albums",["loc",[null,[13,8],[13,20]]]]],[],1,null,["loc",[null,[13,0],[15,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chapter3-routes2/templates/form', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 34
            }
          },
          "moduleName": "chapter3-routes2/templates/form.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("转到about");
          dom.appendChild(el1, el2);
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
            "line": 14,
            "column": 46
          }
        },
        "moduleName": "chapter3-routes2/templates/form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","exampleInputEmail1");
        var el4 = dom.createTextNode("FirstName");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","exampleInputPassword1");
        var el4 = dom.createTextNode("LashName");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"type","submit");
        dom.setAttribute(el2,"class","btn btn-primary");
        var el3 = dom.createTextNode("Submit");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
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
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),3,3);
        morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","class","form-control","id","exampleInputEmail1","placeholder","FirstName","value",["subexpr","@mut",[["get","firstName",["loc",[null,[4,99],[4,108]]]]],[],[]]],["loc",[null,[4,4],[4,110]]]],
        ["inline","input",[],["type","text","class","form-control","id","exampleInputPassword1","placeholder","LashName","value",["subexpr","@mut",[["get","lastName",["loc",[null,[8,101],[8,109]]]]],[],[]]],["loc",[null,[8,4],[8,111]]]],
        ["block","link-to",["about"],[],0,null,["loc",[null,[14,0],[14,46]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter3-routes2/templates/login', ['exports'], function (exports) {

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
            "line": 13,
            "column": 7
          }
        },
        "moduleName": "chapter3-routes2/templates/login.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  //app/templates/login.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","exampleInputEmail1");
        var el4 = dom.createTextNode("FirstName");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","exampleInputPassword1");
        var el4 = dom.createTextNode("LashName");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"type","submit");
        dom.setAttribute(el2,"class","btn btn-primary");
        var el3 = dom.createTextNode("Submit");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),3,3);
        return morphs;
      },
      statements: [
        ["element","ation",["login"],[],["loc",[null,[3,6],[3,23]]]],
        ["inline","input",[],["type","text","class","form-control","id","exampleInputEmail1","placeholder","FirstName","value",["subexpr","@mut",[["get","firstName",["loc",[null,[6,99],[6,108]]]]],[],[]]],["loc",[null,[6,4],[6,110]]]],
        ["inline","input",[],["type","text","class","form-control","id","exampleInputPassword1","placeholder","LashName","value",["subexpr","@mut",[["get","lastName",["loc",[null,[10,101],[10,109]]]]],[],[]]],["loc",[null,[10,4],[10,111]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/posts/index', ['exports'], function (exports) {

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
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "chapter3-routes2/templates/posts/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/posts/index.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/posts/loading', ['exports'], function (exports) {

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
            "line": 3,
            "column": 47
          }
        },
        "moduleName": "chapter3-routes2/templates/posts/loading.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/posts/loading.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","assets/images/loading/loading.gif");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/posts/post', ['exports'], function (exports) {

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
            "line": 4,
            "column": 21
          }
        },
        "moduleName": "chapter3-routes2/templates/posts/post.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/posts/post.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        return morphs;
      },
      statements: [
        ["content","model.title",["loc",[null,[3,4],[3,19]]]],
        ["content","model.body",["loc",[null,[4,3],[4,17]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/posts-error', ['exports'], function (exports) {

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
            "line": 7,
            "column": 4
          }
        },
        "moduleName": "chapter3-routes2/templates/posts-error.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  app/templates/posts-error.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"style","color: red;");
        var el2 = dom.createTextNode("\nposts回调解析出错。。。。\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),3,3);
        return morphs;
      },
      statements: [
        ["content","model",["loc",[null,[6,0],[6,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/posts-loading', ['exports'], function (exports) {

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
            "line": 3,
            "column": 47
          }
        },
        "moduleName": "chapter3-routes2/templates/posts-loading.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/posts-loading.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","assets/images/loading/loading.gif");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter3-routes2/templates/posts', ['exports'], function (exports) {

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
                "line": 7,
                "column": 3
              },
              "end": {
                "line": 7,
                "column": 47
              }
            },
            "moduleName": "chapter3-routes2/templates/posts.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["content","item.title",["loc",[null,[7,33],[7,47]]]]
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
              "line": 5,
              "column": 1
            },
            "end": {
              "line": 9,
              "column": 1
            }
          },
          "moduleName": "chapter3-routes2/templates/posts.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["block","link-to",["posts.post",["get","item",["loc",[null,[7,27],[7,31]]]]],[],0,null,["loc",[null,[7,3],[7,59]]]]
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
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "chapter3-routes2/templates/posts.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/posts.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-4 col-xs-4");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-8 col-xs-8");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[5,9],[5,14]]]]],[],0,null,["loc",[null,[5,1],[9,10]]]],
        ["content","outlet",["loc",[null,[14,0],[14,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter3-routes2/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/controllers/articles.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/articles.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/articles.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/controllers/auth.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/auth.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/auth.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/controllers/form.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/form.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/form.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/controllers/login.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/login.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/login.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/helpers/resolver', ['exports', 'ember/resolver', 'chapter3-routes2/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('chapter3-routes2/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/helpers/start-app', ['exports', 'ember', 'chapter3-routes2/app', 'chapter3-routes2/config/environment'], function (exports, Ember, Application, config) {

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
define('chapter3-routes2/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/models/article.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/article.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/article.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/models/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/post.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/about.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/about.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/about.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/articles/article.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/articles');
  QUnit.test('routes/articles/article.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/articles/article.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/articles.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/articles.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/articles.js should pass jshint.\nroutes/articles.js: line 25, col 5, Comma warnings can be turned off with \'laxcomma\'.\nroutes/articles.js: line 22, col 5, Bad line breaking before \',\'.\n\n2 errors'); 
  });

});
define('chapter3-routes2/tests/routes/auth.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/auth.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/auth.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/favorites.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/favorites.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/favorites.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/form.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/form.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/form.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/login.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/login.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/login.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/posts/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts/post.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/posts-loading.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/posts-loading.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts-loading.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/posts.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/posts.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/test-helper', ['chapter3-routes2/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('chapter3-routes2/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/adapters/my-adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:my-adapter', 'Unit | Adapter | my adapter', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('chapter3-routes2/tests/unit/adapters/my-adapter-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/my-adapter-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/adapters/my-adapter-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/controllers/articles-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter3-routes2/tests/unit/controllers/articles-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/articles-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/articles-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/controllers/auth-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter3-routes2/tests/unit/controllers/auth-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/auth-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/auth-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/controllers/form-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:form', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter3-routes2/tests/unit/controllers/form-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/form-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/form-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/controllers/login-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter3-routes2/tests/unit/controllers/login-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/login-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/login-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/models/article-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter3-routes2/tests/unit/models/article-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/article-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/article-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/models/post-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter3-routes2/tests/unit/models/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/post-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/about-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/about-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/about-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter3-routes2/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/articles/article-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter3-routes2/tests/unit/routes/articles/article-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/articles');
  QUnit.test('unit/routes/articles/article-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/articles/article-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/articles-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter3-routes2/tests/unit/routes/articles-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/articles-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/articles-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/auth-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:auth', 'Unit | Route | auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/auth-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/auth-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/auth-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/favorites-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:favorites', 'Unit | Route | favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/favorites-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/favorites-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/favorites-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/form-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:form', 'Unit | Route | form', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/form-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/form-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/form-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/login-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/login-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/login-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/posts/post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:posts/post', 'Unit | Route | posts/post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/posts/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/posts');
  QUnit.test('unit/routes/posts/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts/post-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/posts-loading-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:posts-loading', 'Unit | Route | posts loading', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/posts-loading-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/posts-loading-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts-loading-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/unit/routes/posts-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter3-routes2/tests/unit/routes/posts-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/posts-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts-test.js should pass jshint.'); 
  });

});
define('chapter3-routes2/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, FirebaseProvider) {

	'use strict';

	exports['default'] = FirebaseProvider['default'];

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('chapter3-routes2/config/environment', ['ember'], function(Ember) {
  var prefix = 'chapter3-routes2';
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
  require("chapter3-routes2/tests/test-helper");
} else {
  require("chapter3-routes2/app")["default"].create({"name":"chapter3-routes2","version":"0.0.0+7c18e17f"});
}

/* jshint ignore:end */
//# sourceMappingURL=chapter3-routes2.map