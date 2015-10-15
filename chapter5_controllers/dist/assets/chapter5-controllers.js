"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('chapter5-controllers/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].RESTAdapter.extend({});

});
define('chapter5-controllers/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'chapter5-controllers/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

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
define('chapter5-controllers/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'chapter5-controllers/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('chapter5-controllers/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter5-controllers/controllers/blog-post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/blog-post.js

	exports['default'] = Ember['default'].Controller.extend({});

});
define('chapter5-controllers/controllers/comments', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/comments.js

	exports['default'] = Ember['default'].Controller.extend({
		postController: Ember['default'].inject.controller('post'),
		post: Ember['default'].computed.reads('postController.model')
	});

});
define('chapter5-controllers/controllers/managing-dependencies-route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('chapter5-controllers/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter5-controllers/controllers/post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('chapter5-controllers/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'chapter5-controllers/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('chapter5-controllers/initializers/export-application-global', ['exports', 'ember', 'chapter5-controllers/config/environment'], function (exports, Ember, config) {

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
define('chapter5-controllers/models/blog-post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  //  app/models/blog-post.js

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr('string'), //  属性默认为string类型，可以不指定
    intro: DS['default'].attr('string'),
    body: DS['default'].attr('string'),
    author: DS['default'].attr('string')
  });

});
define('chapter5-controllers/models/post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr('string'), //  属性默认为string类型，可以不指定
    intro: DS['default'].attr('string'),
    body: DS['default'].attr('string'),
    author: DS['default'].attr('string')
  });

});
define('chapter5-controllers/router', ['exports', 'ember', 'chapter5-controllers/config/environment'], function (exports, Ember, config) {

  'use strict';

  //  router.js

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('blog-post');
    this.route('post', { path: '/posts/:post_id' }, function () {
      this.route('comments');
    });
  });

  exports['default'] = Router;

});
define('chapter5-controllers/routes/blog-post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/blog-post.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			var blogPost = this.store.createRecord('blog-post', {
				title: 'DEFINING A COMPONENT', //  属性默认为string类型，可以不指定
				intro: "Components must have at least one dash in their name. ",
				body: "Components must have at least one dash in their name. So blog-post is an acceptable name, and so is audio-player-controls, but post is not. This prevents clashes with current or future HTML element names, aligns Ember components with the W3C Custom Elements spec, and ensures Ember detects the components automatically.",
				author: 'ubuntuvim'
			});
			// 直接返回一个model，或者你可以返回promises，
			return blogPost;
		}
	});

});
define('chapter5-controllers/routes/post/comments', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chapter5-controllers/routes/post', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chapter5-controllers/templates/application', ['exports'], function (exports) {

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
            "column": 0
          }
        },
        "moduleName": "chapter5-controllers/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter5-controllers/templates/blog-post', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "chapter5-controllers/templates/blog-post.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("hide body");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","body");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
          return morphs;
        },
        statements: [
          ["element","action",["toggleBody"],[],["loc",[null,[12,9],[12,32]]]],
          ["content","model.body",["loc",[null,[14,2],[14,16]]]]
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
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "chapter5-controllers/templates/blog-post.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("Show body");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["toggleBody"],[],["loc",[null,[17,9],[17,32]]]]
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
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "chapter5-controllers/templates/blog-post.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  app/templates/blog-post.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","intro");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
        morphs[3] = dom.createMorphAt(fragment,10,10,contextualElement);
        return morphs;
      },
      statements: [
        ["content","model.title",["loc",[null,[3,4],[3,19]]]],
        ["content","model.author",["loc",[null,[4,4],[4,20]]]],
        ["content","model.intro",["loc",[null,[7,1],[7,16]]]],
        ["block","if",[["get","isExpanded",["loc",[null,[11,6],[11,16]]]]],[],0,1,["loc",[null,[11,0],[18,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chapter5-controllers/templates/post/comments', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 5,
              "column": 1
            }
          },
          "moduleName": "chapter5-controllers/templates/post/comments.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
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
          ["content","comment.text",["loc",[null,[4,6],[4,22]]]]
        ],
        locals: ["comment"],
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
            "line": 6,
            "column": 5
          }
        },
        "moduleName": "chapter5-controllers/templates/post/comments.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Comments for ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["content","post.title",["loc",[null,[1,17],[1,31]]]],
        ["block","each",[["get","model",["loc",[null,[3,9],[3,14]]]]],[],0,null,["loc",[null,[3,1],[5,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter5-controllers/templates/post', ['exports'], function (exports) {

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
        "moduleName": "chapter5-controllers/templates/post.hbs"
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
define('chapter5-controllers/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/controllers/blog-post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/blog-post.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/blog-post.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/controllers/comments.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/comments.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/comments.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/controllers/managing-dependencies-route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/managing-dependencies-route.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/managing-dependencies-route.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/controllers/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/post.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/helpers/resolver', ['exports', 'ember/resolver', 'chapter5-controllers/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('chapter5-controllers/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/helpers/start-app', ['exports', 'ember', 'chapter5-controllers/app', 'chapter5-controllers/config/environment'], function (exports, Ember, Application, config) {

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
define('chapter5-controllers/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/models/blog-post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/blog-post.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/blog-post.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/models/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/post.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/routes/blog-post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/blog-post.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/blog-post.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/routes/post/comments.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/post');
  QUnit.test('routes/post/comments.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/post/comments.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/routes/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/post.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/test-helper', ['chapter5-controllers/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('chapter5-controllers/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('chapter5-controllers/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/controllers/blog-post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:blog-post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter5-controllers/tests/unit/controllers/blog-post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/blog-post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/blog-post-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/controllers/comments-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:comments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter5-controllers/tests/unit/controllers/comments-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/comments-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/comments-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/controllers/managing-dependencies-route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:managing-dependencies-route', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter5-controllers/tests/unit/controllers/managing-dependencies-route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/managing-dependencies-route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/managing-dependencies-route-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/controllers/post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter5-controllers/tests/unit/controllers/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/post-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/models/blog-post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('blog-post', 'Unit | Model | blog post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter5-controllers/tests/unit/models/blog-post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/blog-post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/blog-post-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/models/post-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter5-controllers/tests/unit/models/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/post-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/routes/blog-post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:blog-post', 'Unit | Route | blog post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter5-controllers/tests/unit/routes/blog-post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/blog-post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/blog-post-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/routes/post/comments-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:post/comments', 'Unit | Route | post/comments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter5-controllers/tests/unit/routes/post/comments-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/post');
  QUnit.test('unit/routes/post/comments-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/post/comments-test.js should pass jshint.'); 
  });

});
define('chapter5-controllers/tests/unit/routes/post-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:post', 'Unit | Route | post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter5-controllers/tests/unit/routes/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/post-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('chapter5-controllers/config/environment', ['ember'], function(Ember) {
  var prefix = 'chapter5-controllers';
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
  require("chapter5-controllers/tests/test-helper");
} else {
  require("chapter5-controllers/app")["default"].create({"name":"chapter5-controllers","version":"0.0.0+54b4d90b"});
}

/* jshint ignore:end */
//# sourceMappingURL=chapter5-controllers.map