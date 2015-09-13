"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('chapter2-templates/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'chapter2-templates/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

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
define('chapter2-templates/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'chapter2-templates/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('chapter2-templates/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/controllers/application.js

	exports['default'] = Ember['default'].Controller.extend({
		//  设置属性
		firstName: 'chen',
		lastName: 'ubuntuvim',
		email: 'chendequanroob@gmail.com'
	});

});
define('chapter2-templates/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter2-templates/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter2-templates/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'chapter2-templates/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('chapter2-templates/initializers/export-application-global', ['exports', 'ember', 'chapter2-templates/config/environment'], function (exports, Ember, config) {

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
define('chapter2-templates/models/handlbars-conditions-exp-model', function () {

	'use strict';

	// import DS from 'ember-data';

	// export default DS.Model.extend({
	// 	name: DS.attr('string'), 
	// 	age: DS.attr('number')
	// });

});
define('chapter2-templates/router', ['exports', 'ember', 'chapter2-templates/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('handlebarsConditionsExpRoute');
  });

  exports['default'] = Router;

});
define('chapter2-templates/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		// redirect: function() {
		// 	this.transitionTo('test');
		// }
	});

});
define('chapter2-templates/routes/handlebars-conditions-exp-route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/handlebars-condition-exp-route.js

	exports['default'] = Ember['default'].Route.extend({

		model: function model() {
			return { name: 'i2cao.xyz', age: 25, isAtWork: false, isReading: false };
			// return { enable: true };
		}
	});

});
define('chapter2-templates/routes/test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chapter2-templates/templates/application_base', ['exports'], function (exports) {

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
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/application_base.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/application.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 这个是默认的模板，Ember会根据命名的规则自动找到 controllers/application 对应的模板是templates/application.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Ember的属性自动更新：如果属性在controller层改变了，页面会自动刷新显示最新的值，太强大了！！！ ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nHello, ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("strong");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("!\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nMy email is ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("b");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createMorphAt(element0,2,2);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [12]),0,0);
        return morphs;
      },
      statements: [
        ["content","firstName",["loc",[null,[10,15],[10,28]]]],
        ["content","lastName",["loc",[null,[10,29],[10,41]]]],
        ["content","email",["loc",[null,[12,15],[12,24]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter2-templates/templates/application', ['exports'], function (exports) {

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
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/application.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("\n<header>\n	<h1>ubuntuvim's Blog</h1>\n</header>\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" 所有的模板都会渲染到这里 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        dom.setAttribute(el2,"class","footer");
        var el3 = dom.createTextNode("\n	©2015 ubuntuvim's Publishing,Inc\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 3]),3,3);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[13,1],[13,11]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter2-templates/templates/handlebars-conditions-exp-route', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Welcome back, ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("b");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" !\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","model.name",["loc",[null,[5,17],[5,31]]]]
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
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Ship that code..");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
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
    }());
    var child2 = (function() {
      var child0 = (function() {
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
            "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("You can finish War and Peace eventually..");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
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
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.7",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 0
              },
              "end": {
                "line": 17,
                "column": 0
              }
            },
            "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("This is else block...\n");
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
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
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
          ["block","if",[["get","model.isReading",["loc",[null,[13,10],[13,25]]]]],[],0,1,["loc",[null,[13,0],[17,0]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("unless.....\n");
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
            "line": 31,
            "column": 69
          }
        },
        "moduleName": "chapter2-templates/templates/handlebars-conditions-exp-route.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" app/templates/handlebars-conditions-exp-route.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" if判断标签，当熟悉model的值不为 false, undefined, null or [] 的时候显示标签内的内容 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" if……else……判断 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 非判断 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 可以把表达式直接嵌入在某个标签中，当enable的值为true则结果是增加了一个类(css的类)enable，否则增加'disable' ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode("enable or disable");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [25]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,11,11,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,18,18,contextualElement);
        morphs[3] = dom.createAttrMorph(element0, 'class');
        return morphs;
      },
      statements: [
        ["block","if",[["get","model",["loc",[null,[4,6],[4,11]]]]],[],0,null,["loc",[null,[4,0],[6,7]]]],
        ["block","if",[["get","model.isAtWork",["loc",[null,[11,6],[11,20]]]]],[],1,2,["loc",[null,[11,0],[17,7]]]],
        ["block","unless",[["get","model.isReading",["loc",[null,[23,10],[23,25]]]]],[],3,null,["loc",[null,[23,0],[25,11]]]],
        ["attribute","class",["subexpr","if",[["get","enable",["loc",[null,[31,17],[31,23]]]],"enable","disable"],[],["loc",[null,[31,12],[31,44]]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('chapter2-templates/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/resolver', ['exports', 'ember/resolver', 'chapter2-templates/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('chapter2-templates/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/start-app', ['exports', 'ember', 'chapter2-templates/app', 'chapter2-templates/config/environment'], function (exports, Ember, Application, config) {

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
define('chapter2-templates/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/models/handlbars-conditions-exp-model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/handlbars-conditions-exp-model.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/handlbars-conditions-exp-model.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/handlebars-conditions-exp-route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/handlebars-conditions-exp-route.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/handlebars-conditions-exp-route.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/test.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/test-helper', ['chapter2-templates/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('chapter2-templates/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/application-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/application-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/controllers/handlbars-conditions-exp-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:handlbars-conditions-exp', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/handlbars-conditions-exp-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/handlbars-conditions-exp-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/handlbars-conditions-exp-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/controllers/test-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/test-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/test-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/test-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/models/handlbars-conditions-exp-model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('handlbars-conditions-exp-model', 'Unit | Model | handlbars conditions exp model', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('chapter2-templates/tests/unit/models/handlbars-conditions-exp-model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/handlbars-conditions-exp-model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/handlbars-conditions-exp-model-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/handlbars-conditions-exp-route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:handlbars-conditions-exp-route', 'Unit | Route | handlbars conditions exp route', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/handlbars-conditions-exp-route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/handlbars-conditions-exp-route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/handlbars-conditions-exp-route-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/hello-world-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:hello-world', 'Unit | Route | hello world', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/hello-world-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/hello-world-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/hello-world-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/test-route-naming-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:test-route-naming', 'Unit | Route | test route naming', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/test-route-naming-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/test-route-naming-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/test-route-naming-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/test-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:test', 'Unit | Route | test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/test-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/test-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/test-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('chapter2-templates/config/environment', ['ember'], function(Ember) {
  var prefix = 'chapter2-templates';
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
  require("chapter2-templates/tests/test-helper");
} else {
  require("chapter2-templates/app")["default"].create({"name":"chapter2-templates","version":"0.0.0+6dc7d2b2"});
}

/* jshint ignore:end */
//# sourceMappingURL=chapter2-templates.map