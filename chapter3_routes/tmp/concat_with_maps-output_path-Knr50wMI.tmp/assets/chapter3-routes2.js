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
define('chapter3-routes2/adapters/my-adapter', ['exports', 'chapter3-routes2/adapters/application'], function (exports, ApplicationAdapter) {

	'use strict';

	exports['default'] = ApplicationAdapter['default'].extend({});

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
        // this.route('favorites', { path: '/favs' });

        this.route('posts', function () {
            this.route('post', { path: '/:post_id' });
            // this.route('comments', { resetNamespace: true}, function() {
            //     this.route('new');
            // });
        });

        //this.route('posts');
    });

    exports['default'] = Router;

});
define('chapter3-routes2/routes/about', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

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
define('chapter3-routes2/routes/posts', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts.js

	exports['default'] = Ember['default'].Route.extend({

		//  渲染到favoritePosts模板上
		renderTemplate: function renderTemplate() {
			this.render('favorites');
		}
		// ,

		// model: function(params) {
		// 	//return this.store.find('post');
		// 	//return this.store.findRecord('post', params.post_id);

		// 	console.log('执行了路由posts的model回调。。。');

		// 	return [
		// 	    {
		// 	    	"id":"-JzySrmbivaSSFG6WwOk",
		// 	        "body" : "testsssss",
		// 	        "timestamp" : 1443083287846,
		// 	        "title" : "test"
		// 	    },
		// 	    {
		// 	    	"id":"-JzyT-VLEWdF6zY3CefO",
		// 	        "body" : "33333333",
		// 	        "timestamp" : 1443083323541,
		// 	        "title" : "test33333"
		// 	    },
		// 	    {
		// 	    	"id":"-JzyUqbJcT0ct14OizMo" ,
		// 	        "body" : "body.....",
		// 	        "timestamp" : 1443083808036,
		// 	        "title" : "title1231232132"
		// 	    }
		// 	];
		// }
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
              "line": 13,
              "column": 20
            },
            "end": {
              "line": 13,
              "column": 59
            }
          },
          "moduleName": "chapter3-routes2/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("post_id test");
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
            "line": 27,
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
        var el4 = dom.createTextNode("\n\n                ");
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
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#");
        var el6 = dom.createTextNode("Login");
        dom.appendChild(el5, el6);
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
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[7,16],[7,73]]]],
        ["block","link-to",["about"],[],1,null,["loc",[null,[10,20],[10,57]]]],
        ["block","link-to",["posts"],[],2,null,["loc",[null,[11,14],[11,51]]]],
        ["block","link-to",["posts.post",1],[],3,null,["loc",[null,[13,20],[13,71]]]],
        ["content","outlet",["loc",[null,[24,0],[24,10]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
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
            "line": 1,
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
                "line": 4,
                "column": 3
              },
              "end": {
                "line": 4,
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
            ["content","item.title",["loc",[null,[4,33],[4,47]]]]
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
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 6,
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
          ["block","link-to",["posts.post",["get","item",["loc",[null,[4,27],[4,31]]]]],[],0,null,["loc",[null,[4,3],[4,59]]]]
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
            "line": 11,
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
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[2,9],[2,14]]]]],[],0,null,["loc",[null,[2,1],[6,10]]]],
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
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
define('chapter3-routes2/tests/adapters/my-adapter.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/my-adapter.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/my-adapter.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
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
define('chapter3-routes2/tests/routes/favorites.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/favorites.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/favorites.js should pass jshint.'); 
  });

});
define('chapter3-routes2/tests/routes/posts/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts/post.js should pass jshint.'); 
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