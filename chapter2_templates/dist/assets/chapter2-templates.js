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
define('chapter2-templates/components/my-action', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		//  控制页面文章详细内容是否显示
		isShowingBody: false,
		actions: {
			showDetailInfo: function showDetailInfo() {
				// toggleProperty方法直接把isShowingBody设置为相反值
				// toggleProperty方法详情：http://devdocs.io/ember/classes/ember.observable#method_toggleProperty
				// this.toggleProperty('isShowingBody');

				// 变量作用域问题
				var isShowingBody = this.get('isShowingBody');
				if (isShowingBody) {
					this.set('isShowingBody', false);
				} else {
					this.set('isShowingBody', true);
				}
			},

			hitMe: function hitMe(m) {
				//  参数的名字可以任意
				console.log('The title is ' + m.title);
				console.log('The body is ' + m.body);
			},

			triggerMe: function triggerMe() {
				console.log('触发mouseover事件。。。。');
			},

			pressALTKeyTiggerMe: function pressALTKeyTiggerMe() {
				console.log('pressALTKeyTiggerMe event tiggered by press alt...');
			}
		}
	});

});
define('chapter2-templates/components/store-categories', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		willRender: function willRender() {
			//  设置一个对象到属性“categories”上，并且设置到categories属性上的对象结构是：key为字符串，value为数组
			this.set('categories', {
				'Bourbons': ['Bulleit', 'Four Roses', 'Woodford Reserve'],
				'Ryes': ['WhistlePig', 'High West']
			});
		},
		actions: {
			addCategory: function addCategory(category) {
				var categories = this.get('categories');
				categories[category] = [];

				this.rerender();
			}
		},
		model: function model() {
			var arr = [Ember['default'].Object.create({ name: 'chen', age: 25 }), Ember['default'].Object.create({ name: 'i2cao.xyz', age: 0.2 }), Ember['default'].Object.create({ name: 'ibeginner.sinaapp.com', age: 1 }), Ember['default'].Object.create({ name: 'ubuntuvim.xyz', age: 3 })];

			//  在前面的文章介绍过他们的不同之处：http://ibeginner.sinaapp.com/index.php?m=Home&c=Index&a=detail&id=e2ea5494bf3d121f25a825c40325c541
			arr.push({ name: 'add_test', age: 1 }); //Ember不建议使用这个方法新增数据
			arr.pushObject({ name: 'pushObject', age: 2 }); //官方建议的方法

			return arr;
		}
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
define('chapter2-templates/controllers/dev-helper', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/controllers/dev-helper.js

	exports['default'] = Ember['default'].Controller.extend({
		testName: 'This is a testvalue...'
	});

});
define('chapter2-templates/controllers/form-helper', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/controllers/form-helper.js

	exports['default'] = Ember['default'].Controller.extend({
		actions: {
			getInputValue: function getInputValue() {
				var v = this.get('getValueKey');
				console.log('v = ' + v);

				var v2 = this.get('getByName');
				console.log('v2 = ' + v2);
			},
			getValueByV: function getValueByV() {
				var v = this.get('key');
				console.log('v = ' + v);
			}
		},
		isChecked: true,
		helloworld: 'The value from route...'
	});

});
define('chapter2-templates/controllers/myaction', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/controllers/myaction.js

	exports['default'] = Ember['default'].Controller.extend({

		actions: {
			bandDidChange: function bandDidChange(event) {
				console.log('event = ' + event);
			},
			hitMe1: function hitMe1() {
				console.log('hitMe1.....');
			},
			hitMe2: function hitMe2() {
				console.log('hitMe2.....');
			}
		}

	});

});
define('chapter2-templates/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chapter2-templates/controllers/tools-helper', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/controllers/tools-helper.js

	exports['default'] = Ember['default'].Controller.extend({
		currentDate: new Date(),
		cDate: '2015-09-22',
		currentTime: '00:22:32'
	});

});
define('chapter2-templates/helpers/escape-helper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.escapeHelper = escapeHelper;

  function escapeHelper(params /*, hash*/) {
    // return Ember.String.htmlSafe(`<b>${params}</b>`);
    return '<b>' + params + '</b>';
  }

  exports['default'] = Ember['default'].Helper.helper(escapeHelper);

});
define('chapter2-templates/helpers/format-date-time', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.formatDateTime = formatDateTime;

	function formatDateTime(params, hash) {
		//  参数的顺序跟模板{{format-date-time currentDate cDate currentTime}}上使用顺序一致，
		//  cDate比currentTime先，所以第一个参数是cDate
		console.log('params[0] = ' + params[0]); //第一个参数是cDate,
		console.log('params[1] = ' + params[1]); //  第二个是currentTime
		console.log('hash.format = ' + hash.format);
		console.log('hash.locale = ' + hash.locale);
		console.log('------------------------------------');

		return params;
	}

	exports['default'] = Ember['default'].Helper.helper(formatDateTime);

});
define('chapter2-templates/helpers/format-date-yyyy-mm-dd', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.formatDateyyyyMmDd = formatDateyyyyMmDd;

	function formatDateyyyyMmDd(params, hash) {
		console.log('params=' + params);
		console.log('hash.format = ' + hash.format); //
		console.log('------------------------------------');
		return params;
	}

	exports['default'] = Ember['default'].Helper.helper(formatDateyyyyMmDd);

});
define('chapter2-templates/helpers/format-date', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  //  app/helpers/format-data.js

  exports['default'] = Ember['default'].Helper.helper(function formatDate(params /*, hash*/) {
    var d = Date.parse(params);
    var dd = new Date(parseInt(d)).toLocaleString().replace(/:\d{1,2}$/, ' '); //  2015/9/21 下午11:21
    var v = dd.replace("/", "-").replace("/", "-").substr(0, 9);
    return v;
  });

});
define('chapter2-templates/helpers/my-helper', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports.myHelper = myHelper;

	function myHelper(params, namedArgs) {
		console.log('namedArgs = ' + namedArgs);
		console.log('params = ' + params);
		console.log('=========================');
		return namedArgs.firstName + ", " + namedArgs.lastName;
	}

	// export function myHelper([arg1, arg2]) {
	// 	console.log('p1 = ' + arg1 + ", p2 = " + arg2);
	// 	return arg1 + " " + arg2;
	// }

	exports['default'] = Ember['default'].Helper.helper(myHelper);

});
define('chapter2-templates/helpers/tools-helper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.toolsHelper = toolsHelper;

  function toolsHelper(params /*, hash*/) {
    return params;
  }

  exports['default'] = Ember['default'].Helper.helper(toolsHelper);

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
define('chapter2-templates/models/comment', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('chapter2-templates/models/post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    // id: DS.attr('number'),
    title: DS['default'].attr('string'),
    body: DS['default'].attr('string'),
    url: DS['default'].attr('string')
  });

});
define('chapter2-templates/router', ['exports', 'ember', 'chapter2-templates/config/environment'], function (exports, Ember, config) {

  'use strict';

  //  app/routers.js

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
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

    this.route('posts', function () {
      //指定子路由，:post_id会自动转换为数据的id
      this.route('detail', { path: '/:post_id' }, function () {
        //增加一个comments路由
        this.route('comments', function () {
          // 在comments下面再增加一个子路由comment，并且路由是个动态字段comment_id
          this.route('comment', { path: '/:comment_id' });
        });
      });
    });

    this.route('myaction');
    this.route('form-helper');
    this.route('dev-helper');
    this.route('tools-helper');
  });

  exports['default'] = Router;

});
define('chapter2-templates/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			console.log('running in application....');

			return { id: 1, routeName: 'The route is application >> ' };
		}
	});

});
define('chapter2-templates/routes/binding-element-attributes', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return { imgUrl: 'http://i1.tietuku.com/1f73778ea702c725.jpg', isEnable: false };
		}
	});

});
define('chapter2-templates/routes/dev-helper', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/dev-helper.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return [{ id: 1, name: 'chen', age: 25 }, { id: 2, name: 'ibeginner.sinaapp.com', age: 2 }];
		}
	});

});
define('chapter2-templates/routes/form-helper', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/routes/form-helper.js

	exports['default'] = Ember['default'].Route.extend({
		// model: function() {
		// 	return { helloworld: 'The value from route...' }
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
define('chapter2-templates/routes/handlebars-each', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/handlebars.js

	exports['default'] = Ember['default'].Route.extend({
		//  重写model回调函数，初始化测试数据
		model: function model() {
			var arr = [Ember['default'].Object.create({ name: 'chen', age: 25 }), Ember['default'].Object.create({ name: 'i2cao.xyz', age: 0.2 }), Ember['default'].Object.create({ name: 'ibeginner.sinaapp.com', age: 1 }), Ember['default'].Object.create({ name: 'ubuntuvim.xyz', age: 3 })];

			//  在前面的文章介绍过他们的不同之处：http://ibeginner.sinaapp.com/index.php?m=Home&c=Index&a=detail&id=e2ea5494bf3d121f25a825c40325c541
			arr.push({ name: 'add_test', age: 1 }); //Ember不建议使用这个方法新增数据
			arr.pushObject({ name: 'pushObject', age: 2 }); //官方建议的方法

			return arr;
		}
	});

});
define('chapter2-templates/routes/link-to-helper-example', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	// app/routes/link-to-helper-example.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return [Ember['default'].Object.create({ name: 'chen', age: 25 }), Ember['default'].Object.create({ name: 'i2cao.xyz', age: 0.2 }), Ember['default'].Object.create({ name: 'ibeginner.sinaapp.com', age: 1 }), Ember['default'].Object.create({ name: 'ubuntuvim.xyz', age: 3 })];
		}
	});

});
define('chapter2-templates/routes/myaction', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/myaction.js

	exports['default'] = Ember['default'].Route.extend({
		//  返回测试数据到页面
		model: function model() {
			return { id: 1, title: 'ACTIONS', body: "Your app will often need a way to let users interact with controls that change application state. For example, imagine that you have a template that shows a blog title, and supports expanding the post to show the body.If you add the {{action}} helper to an HTML element, when a user clicks the element, the named event will be sent to the template's corresponding component or controller." };
		}
	});

});
define('chapter2-templates/routes/posts', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {

			console.log('running in posts...');
			return { id: 1, routeName: 'The route is posts >> ' };
			// return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
		}

	});

});
define('chapter2-templates/routes/posts/detail', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts/detail.js

	exports['default'] = Ember['default'].Route.extend({

		model: function model(params) {
			// console.log('params id = ' + params.post_id);
			console.log('running in detail....');

			//  执行一个循环，模拟休眠
			// for (var i = 0; i < 10000000000; i++) {

			// }
			// console.log('The comment route executed...');

			return { id: 1, routeName: 'The route is detail >> ', url: 'https://www.google.com.hk' };
		}
	});

});
define('chapter2-templates/routes/posts/detail/comment/comment', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts/detail/comments/comment.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model(params) {
			console.log('params id = ' + params.post_id);
			console.log('running in comment...');
			return { id: 1, routeName: 'The route is comment >> ' };
		}
	});

});
define('chapter2-templates/routes/posts/detail/comments', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/routes/posts/detail/comments.js

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			console.log('running in comments...');

			//  执行一个循环，模拟休眠
			// for (var i = 0; i < 10000000000; i++) {

			// }
			// console.log('The comment route executed...');

			return { id: 1, routeName: 'The route is comments >> ' };
		}
	});

});
define('chapter2-templates/routes/tools-helper', ['exports', 'ember'], function (exports, Ember) {

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
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 24
            },
            "end": {
              "line": 8,
              "column": 49
            }
          },
          "moduleName": "chapter2-templates/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Posts");
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
            "line": 36,
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
        var el1 = dom.createTextNode("\n");
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
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"class","navbar-brand");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createTextNode("Blog");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","nav navbar-nav");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("\n{{#if auth.authed}}\n                    <li>{{#link-to 'posts.'}}Add New Post{{/link-to}}</li>\n        {{/if}}        ");
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
        var el4 = dom.createTextNode("\n                \n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("    {{#unless auth.authed}}\n                    <li><a href=\"#\" {{action 'login' on='click'}}>Login</a></li>\n                    {{else}}\n                    <li><a href=\"#\" {{action 'logout' on='click'}}>Logout</a></li>\n                    {{/unless}}                    ");
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
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" 所有的子路由对应的模板都会渲染到这里 ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" // container-fluid ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["posts"],[],0,null,["loc",[null,[8,24],[8,61]]]],
        ["content","outlet",["loc",[null,[31,4],[31,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter2-templates/templates/binding-element-attributes', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
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
              "line": 15,
              "column": 71
            }
          },
          "moduleName": "chapter2-templates/templates/binding-element-attributes.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("link-to");
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/binding-element-attributes.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" //  app/templates/binding-element-attribute.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","logo");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"alt","logo");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","checkbox");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(fragment, [7]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createAttrMorph(element1, 'disabled');
        morphs[2] = dom.createMorphAt(fragment,12,12,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,15,15,contextualElement);
        return morphs;
      },
      statements: [
        ["attribute","src",["get","model.imgUrl",["loc",[null,[4,12],[4,24]]]]],
        ["attribute","disabled",["get","model.isEnable",["loc",[null,[10,34],[10,48]]]]],
        ["block","link-to",["binding-element-attributes"],["data-toggle","dropdown"],0,null,["loc",[null,[15,0],[15,83]]]],
        ["inline","input",[],["type","text","data-toggle","tooltip","data-placement","bottom","title","Name"],["loc",[null,[16,0],[16,80]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter2-templates/templates/components/my-action', ['exports'], function (exports) {

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
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/components/my-action.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
          return morphs;
        },
        statements: [
          ["content","model.body",["loc",[null,[8,0],[8,14]]]]
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
            "line": 28,
            "column": 9
          }
        },
        "moduleName": "chapter2-templates/templates/components/my-action.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  //  app/templates/myaction.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        dom.setAttribute(el1,"type","text/x-handlebars");
        dom.setAttribute(el1,"id","components/my-action");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" showDetailInfo这个事件的名字必须要跟controller里的方法名字一致 ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"style","cursor: pointer;");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" model直接作为参数传递到controller ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("点击我吧");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#/myaction");
        var el4 = dom.createTextNode("键盘按下时触发我");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("按下Alt触发我");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [10]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element2, [7]);
        var element5 = dom.childAt(element0, [15]);
        var morphs = new Array(7);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element1,0,0);
        morphs[2] = dom.createMorphAt(element0,5,5);
        morphs[3] = dom.createElementMorph(element3);
        morphs[4] = dom.createElementMorph(element4);
        morphs[5] = dom.createElementMorph(element5);
        morphs[6] = dom.createMorphAt(element0,17,17);
        return morphs;
      },
      statements: [
        ["element","action",["showDetailInfo"],[],["loc",[null,[5,4],[5,31]]]],
        ["content","model.title",["loc",[null,[5,57],[5,72]]]],
        ["block","if",[["get","isShowingBody",["loc",[null,[6,6],[6,19]]]]],[],0,null,["loc",[null,[6,0],[10,7]]]],
        ["element","action",["hitMe",["get","model",["loc",[null,[15,25],[15,30]]]]],[],["loc",[null,[15,8],[15,32]]]],
        ["element","action",["triggerMe"],["on","mouseOver"],["loc",[null,[17,21],[17,58]]]],
        ["element","action",["pressALTKeyTiggerMe"],["allowedKeys","alt"],["loc",[null,[21,8],[21,58]]]],
        ["content","yield",["loc",[null,[26,0],[26,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter2-templates/templates/components/store-categories', ['exports'], function (exports) {

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
                "line": 8,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 8
              }
            },
            "moduleName": "chapter2-templates/templates/components/store-categories.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
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
            ["content","product",["loc",[null,[9,14],[9,25]]]]
          ],
          locals: ["product"],
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
              "column": 2
            },
            "end": {
              "line": 13,
              "column": 2
            }
          },
          "moduleName": "chapter2-templates/templates/components/store-categories.hbs"
        },
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ol");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0,0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [2]),1,1);
          return morphs;
        },
        statements: [
          ["content","category",["loc",[null,[6,8],[6,20]]]],
          ["block","each",[["get","products",["loc",[null,[8,16],[8,24]]]]],["key","@item"],0,null,["loc",[null,[8,8],[10,17]]]]
        ],
        locals: ["category","products"],
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
              "line": 20,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/components/store-categories.hbs"
        },
        arity: 1,
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
          ["content","item.name",["loc",[null,[21,0],[21,13]]]]
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
            "line": 22,
            "column": 12
          }
        },
        "moduleName": "chapter2-templates/templates/components/store-categories.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" // templates/components/store-categories.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        dom.setAttribute(el1,"type","text/x-handlebars");
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
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),1,1);
        morphs[1] = dom.createMorphAt(fragment,10,10,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each-in",[["get","categories",["loc",[null,[5,13],[5,23]]]]],[],0,null,["loc",[null,[5,2],[13,14]]]],
        ["block","each-in",[["get","model",["loc",[null,[20,11],[20,16]]]]],[],1,null,["loc",[null,[20,0],[22,12]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chapter2-templates/templates/dev-helper', ['exports'], function (exports) {

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
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/dev-helper.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","debugger",["loc",[null,[15,1],[15,13]]]]
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
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/dev-helper.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" app/templates/dev-helper.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n	直接显示在页面上：");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n	");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
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
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,9,9,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,13,13,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,19,19,contextualElement);
        return morphs;
      },
      statements: [
        ["content","testName",["loc",[null,[3,10],[3,22]]]],
        ["inline","log",[["get","testName",["loc",[null,[4,7],[4,15]]]]],[],["loc",[null,[4,1],[4,17]]]],
        ["inline","log",["这句话在断点前面"],[],["loc",[null,[7,0],[7,18]]]],
        ["inline","log",["这句话在断点后面"],[],["loc",[null,[10,0],[10,18]]]],
        ["block","each",[["get","model",["loc",[null,[14,8],[14,13]]]]],[],0,null,["loc",[null,[14,0],[16,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter2-templates/templates/form-helper', ['exports'], function (exports) {

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
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/form-helper.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
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
        var el1 = dom.createTextNode("\n按enter键触发\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\ncheckbox\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,6,6,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,11,11,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,16,16,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,21,21,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","input",[],["name","username","placeholder","your name","value","model.helloworld"],["loc",[null,[4,0],[4,74]]]],
        ["inline","input",[],["name","username","placeholder","your name","value",["subexpr","@mut",[["get","helloworld",["loc",[null,[6,54],[6,64]]]]],[],[]]],["loc",[null,[6,0],[6,66]]]],
        ["inline","input",[],["value",["subexpr","@mut",[["get","getValueKey",["loc",[null,[10,14],[10,25]]]]],[],[]],"enter","getInputValue","name",["subexpr","@mut",[["get","getByName",["loc",[null,[10,53],[10,62]]]]],[],[]],"placeholder","请输入测试的内容"],["loc",[null,[10,0],[10,87]]]],
        ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","isChecked",["loc",[null,[14,32],[14,41]]]]],[],[]]],["loc",[null,[14,0],[14,44]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","key",["loc",[null,[17,17],[17,20]]]]],[],[]],"cols","80","rows","3","enter","getValueByV"],["loc",[null,[17,0],[17,61]]]]
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
define('chapter2-templates/templates/handlebars-each', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
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
              "line": 7,
              "column": 1
            }
          },
          "moduleName": "chapter2-templates/templates/handlebars-each.hbs"
        },
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Hello everyone, My name is ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" and ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" year old.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0,0,0);
          morphs[1] = dom.createMorphAt(element0,2,2);
          morphs[2] = dom.createMorphAt(element0,4,4);
          return morphs;
        },
        statements: [
          ["content","index",["loc",[null,[6,6],[6,15]]]],
          ["content","item.name",["loc",[null,[6,43],[6,56]]]],
          ["content","item.age",["loc",[null,[6,61],[6,73]]]]
        ],
        locals: ["item","index"],
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
          "moduleName": "chapter2-templates/templates/handlebars-each.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	Hello, ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","item.name",["loc",[null,[14,8],[14,21]]]]
        ],
        locals: ["item"],
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
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/handlebars-each.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	Sorry, nobody is here.\n");
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
            "line": 17,
            "column": 9
          }
        },
        "moduleName": "chapter2-templates/templates/handlebars-each.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" // app/templates/handlebars.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[1] = dom.createMorphAt(fragment,8,8,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[5,9],[5,14]]]]],[],0,null,["loc",[null,[5,1],[7,10]]]],
        ["block","each",[["get","model",["loc",[null,[13,8],[13,13]]]]],[],1,2,["loc",[null,[13,0],[17,9]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('chapter2-templates/templates/link-to-helper-example', ['exports'], function (exports) {

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
                "line": 5,
                "column": 5
              },
              "end": {
                "line": 5,
                "column": 65
              }
            },
            "moduleName": "chapter2-templates/templates/link-to-helper-example.hbs"
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
            ["content","item.name",["loc",[null,[5,52],[5,65]]]]
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
              "line": 4,
              "column": 1
            },
            "end": {
              "line": 6,
              "column": 1
            }
          },
          "moduleName": "chapter2-templates/templates/link-to-helper-example.hbs"
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
          ["block","link-to",["link-to-helper-example.edit",["get","item",["loc",[null,[5,46],[5,50]]]]],[],0,null,["loc",[null,[5,5],[5,77]]]]
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
            "line": 7,
            "column": 5
          }
        },
        "moduleName": "chapter2-templates/templates/link-to-helper-example.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" // app/templates/link-to-helper-example.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
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
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[4,9],[4,14]]]]],[],0,null,["loc",[null,[4,1],[6,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter2-templates/templates/myaction', ['exports'], function (exports) {

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
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "chapter2-templates/templates/myaction.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
          return morphs;
        },
        statements: [
          ["content","model.body",["loc",[null,[9,0],[9,14]]]]
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
            "line": 35,
            "column": 68
          }
        },
        "moduleName": "chapter2-templates/templates/myaction.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  //  app/templates/myaction.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" showDetailInfo这个事件的名字必须要跟controller里的方法名字一致 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"style","cursor: pointer;");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" model直接作为参数传递到controller ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("点击我吧");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#/myaction");
        var el3 = dom.createTextNode("键盘按下时触发我");
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
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("按下Alt触发我");
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
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"href","http://www.baidu.com");
        var el2 = dom.createTextNode("\n点我跳转\n");
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
        var el1 = dom.createElement("label");
        var el2 = dom.createTextNode("失去焦点时候触发");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","text");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("无CSS设置的div标签");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","cursor: pointer;");
        var el2 = dom.createTextNode("有CSS设置的div标签");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(fragment, [11]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element1, [7]);
        var element4 = dom.childAt(fragment, [16]);
        var element5 = dom.childAt(fragment, [21]);
        var element6 = dom.childAt(fragment, [28]);
        var element7 = dom.childAt(fragment, [33]);
        var element8 = dom.childAt(fragment, [35]);
        var morphs = new Array(11);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0,0,0);
        morphs[2] = dom.createMorphAt(fragment,6,6,contextualElement);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createElementMorph(element3);
        morphs[5] = dom.createElementMorph(element4);
        morphs[6] = dom.createElementMorph(element5);
        morphs[7] = dom.createAttrMorph(element6, 'value');
        morphs[8] = dom.createAttrMorph(element6, 'onblur');
        morphs[9] = dom.createElementMorph(element7);
        morphs[10] = dom.createElementMorph(element8);
        return morphs;
      },
      statements: [
        ["element","action",["showDetailInfo"],[],["loc",[null,[6,4],[6,31]]]],
        ["content","model.title",["loc",[null,[6,57],[6,72]]]],
        ["block","if",[["get","isShowingBody",["loc",[null,[7,6],[7,19]]]]],[],0,null,["loc",[null,[7,0],[11,7]]]],
        ["element","action",["hitMe",["get","model",["loc",[null,[16,25],[16,30]]]]],[],["loc",[null,[16,8],[16,32]]]],
        ["element","action",["triggerMe"],["on","mouseOver"],["loc",[null,[18,21],[18,58]]]],
        ["element","action",["pressALTKeyTiggerMe"],["allowedKeys","alt"],["loc",[null,[22,8],[22,58]]]],
        ["element","action",["showDetailInfo"],[],["loc",[null,[25,31],[25,58]]]],
        ["attribute","value",["get","textValue",["loc",[null,[31,27],[31,36]]]]],
        ["attribute","onblur",["subexpr","action",["bandDidChange"],["value","target.value"],["loc",[null,[31,46],[31,93]]]]],
        ["element","action",["hitMe1"],[],["loc",[null,[34,5],[34,24]]]],
        ["element","action",["hitMe2"],[],["loc",[null,[35,5],[35,24]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chapter2-templates/templates/posts', ['exports'], function (exports) {

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
            "line": 45,
            "column": 1
          }
        },
        "moduleName": "chapter2-templates/templates/posts.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  //  app/templates/posts.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("\n	<div class=\"row\">\n		<div class=\"col-md-4 col-xs-4\">\n			\n			<ul class=\"list-group\">\n\n				<li class=\"list-group-item\">\n{{#link-to 'posts.detail' 100 class='active'}}\n					posts.detail.comments（/posts/1）形式\n					{{/link-to}}				</li>\n\n				<li class=\"list-group-item\">\n{{#link-to 'posts.detail.comments' 1 class='active'}}\n					posts.detail.comments（/posts/1/comments）形式\n					{{/link-to}}				</li>\n\n				<li class=\"list-group-item\">\n{{#link-to 'posts.detail.comment' 1 2 class='active'}}\n					posts.detail.comment（posts/1/comments/2）形式\n					{{/link-to}}				</li>\n			</ul>\n			\n\n			{{model.routeName}}\n		</div>\n\n		<div class=\"col-md-8 col-xs-8\">\n			\n		</div>\n	</div>\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 所有的子路由对应的模板都会渲染到outlet上 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nposts渲染完成\n\n	");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,6,6,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,8,8,contextualElement);
        return morphs;
      },
      statements: [
        ["content","model.routeName",["loc",[null,[39,0],[39,19]]]],
        ["content","outlet",["loc",[null,[41,0],[41,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter2-templates/templates/posts/detail', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 67
            }
          },
          "moduleName": "chapter2-templates/templates/posts/detail.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("show text info");
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
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 71
            }
          },
          "moduleName": "chapter2-templates/templates/posts/detail.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("在本页面打开连接");
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
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/posts/detail.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" // app/templates/posts/detail.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 所有的子路由对应的模板都会渲染到outlet上 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 在当前页面打开连接，使用replace=true设置 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,6,6,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,8,8,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,12,12,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[4,0],[4,10]]]],
        ["inline","link-to",["show text info","posts.detail",1],["class","btn btn-primary"],["loc",[null,[7,0],[7,69]]]],
        ["block","link-to",["posts.detail",1],["class","btn btn-primary"],0,null,["loc",[null,[9,0],[9,79]]]],
        ["block","link-to",["application"],["class","btn btn-primary","replace",true],1,null,["loc",[null,[12,0],[12,83]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chapter2-templates/templates/posts/detail/comment/comment', ['exports'], function (exports) {

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
            "column": 11
          }
        },
        "moduleName": "chapter2-templates/templates/posts/detail/comment/comment.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" // app/templates/posts/detail/comments/comment.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 已经没有子路由不需要 outlet ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\ncomment渲染完成");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
        return morphs;
      },
      statements: [
        ["content","model.routeName",["loc",[null,[4,0],[4,19]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter2-templates/templates/posts/detail/comments', ['exports'], function (exports) {

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
            "line": 8,
            "column": 12
          }
        },
        "moduleName": "chapter2-templates/templates/posts/detail/comments.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" // app/templates/posts/detail/comments.hbs ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" 所有的子路由对应的模板都会渲染到outlet上 ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\ncomments渲染完成");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,6,6,contextualElement);
        return morphs;
      },
      statements: [
        ["content","model.routeName",["loc",[null,[4,0],[4,19]]]],
        ["content","outlet",["loc",[null,[6,0],[6,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chapter2-templates/templates/tools-helper', ['exports'], function (exports) {

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
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "chapter2-templates/templates/tools-helper.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("  //app/templates/tools-helper.hbs  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nmy-helper: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nmy-helper-param: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nmy-helper-named-param: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\ncurrentDate: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nformat-date-yyyy-mm-dd: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nformat-date-time: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nformat-date-time-local: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nescape-helper: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,8,8,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,14,14,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,20,20,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,26,26,contextualElement);
        morphs[5] = dom.createMorphAt(fragment,32,32,contextualElement);
        morphs[6] = dom.createMorphAt(fragment,38,38,contextualElement);
        morphs[7] = dom.createMorphAt(fragment,44,44,contextualElement);
        return morphs;
      },
      statements: [
        ["content","my-helper",["loc",[null,[3,11],[3,24]]]],
        ["inline","my-helper",["chen","ubuntuvim"],[],["loc",[null,[6,17],[6,49]]]],
        ["inline","my-helper",[],["firstName","chen","lastName","ubuntuvim"],["loc",[null,[9,23],[9,74]]]],
        ["inline","format-date",[["get","currentDate",["loc",[null,[13,27],[13,38]]]]],[],["loc",[null,[13,13],[13,40]]]],
        ["inline","format-date-yyyy-mm-dd",[["get","currentDate",["loc",[null,[16,49],[16,60]]]]],["format","yyyy-MM-dd"],["loc",[null,[16,24],[16,82]]]],
        ["inline","format-date-time",[["get","currentDate",["loc",[null,[20,37],[20,48]]]],["get","cDate",["loc",[null,[20,49],[20,54]]]],["get","currentTime",["loc",[null,[20,55],[20,66]]]]],["format","yyyy-MM-dd h:mm:ss"],["loc",[null,[20,18],[20,96]]]],
        ["inline","format-date-time",[["get","currentDate",["loc",[null,[24,43],[24,54]]]],["get","cDate",["loc",[null,[24,55],[24,60]]]],["get","currentTime",["loc",[null,[24,61],[24,72]]]]],["format","yyyy-MM-dd h:mm:ss","locale","en"],["loc",[null,[24,24],[24,114]]]],
        ["inline","escape-helper",["helloworld!"],[],["loc",[null,[28,15],[28,46]]]]
      ],
      locals: [],
      templates: []
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
define('chapter2-templates/tests/components/my-action.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/my-action.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/my-action.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/components/store-categories.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/store-categories.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/store-categories.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/controllers/dev-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/dev-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/dev-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/controllers/form-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/form-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/form-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/controllers/myaction.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/myaction.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/myaction.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/controllers/tools-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/tools-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/tools-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/escape-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/escape-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/escape-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/format-date-time.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/format-date-time.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/format-date-time.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/format-date-yyyy-mm-dd.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/format-date-yyyy-mm-dd.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/format-date-yyyy-mm-dd.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/format-date.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/format-date.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/format-date.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/helpers/my-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/my-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/my-helper.js should pass jshint.'); 
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
define('chapter2-templates/tests/helpers/tools-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/tools-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/tools-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/integration/components/binding-element-attributes-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('binding-element-attributes', 'Integration | Component | binding element attributes', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 30
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'binding-element-attributes', ['loc', [null, [1, 0], [1, 30]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'binding-element-attributes', [], [], 0, null, ['loc', [null, [2, 4], [4, 35]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('chapter2-templates/tests/integration/components/binding-element-attributes-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/binding-element-attributes-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/binding-element-attributes-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/integration/components/my-action-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('my-action', 'Integration | Component | my action', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'my-action', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'my-action', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('chapter2-templates/tests/integration/components/my-action-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/my-action-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/my-action-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/integration/components/store-categories-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('store-categories', 'Integration | Component | store categories', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'store-categories', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'store-categories', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('chapter2-templates/tests/integration/components/store-categories-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/store-categories-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/store-categories-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/models/comment.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/comment.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/comment.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/models/post.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/post.js should pass jshint.'); 
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
define('chapter2-templates/tests/routes/binding-element-attributes.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/binding-element-attributes.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/binding-element-attributes.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/dev-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/dev-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/dev-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/form-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/form-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/form-helper.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/handlebars-conditions-exp-route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/handlebars-conditions-exp-route.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/handlebars-conditions-exp-route.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/handlebars-each.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/handlebars-each.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/handlebars-each.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/link-to-helper-example.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/link-to-helper-example.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/link-to-helper-example.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/myaction.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/myaction.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/myaction.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/posts.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/posts.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/posts/detail.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/posts');
  QUnit.test('routes/posts/detail.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/posts/detail.js should pass jshint.\nroutes/posts/detail.js: line 7, col 21, \'params\' is defined but never used.\n\n1 error'); 
  });

});
define('chapter2-templates/tests/routes/posts/detail/comment/comment.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/posts/detail/comment');
  QUnit.test('routes/posts/detail/comment/comment.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts/detail/comment/comment.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/posts/detail/comments.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/posts/detail');
  QUnit.test('routes/posts/detail/comments.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/posts/detail/comments.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/routes/tools-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/tools-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/tools-helper.js should pass jshint.'); 
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
define('chapter2-templates/tests/unit/controllers/dev-helper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:dev-helper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/dev-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/dev-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/dev-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/controllers/form-helper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:form-helper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/form-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/form-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/form-helper-test.js should pass jshint.'); 
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
define('chapter2-templates/tests/unit/controllers/myaction-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:myaction', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/myaction-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/myaction-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/myaction-test.js should pass jshint.'); 
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
define('chapter2-templates/tests/unit/controllers/tools-helper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:tools-helper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chapter2-templates/tests/unit/controllers/tools-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/tools-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/controllers/tools-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/helpers/escape-helper-test', ['chapter2-templates/helpers/escape-helper', 'qunit'], function (escape_helper, qunit) {

  'use strict';

  qunit.module('Unit | Helper | escape helper');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = escape_helper.escapeHelper(42);
    assert.ok(result);
  });

});
define('chapter2-templates/tests/unit/helpers/escape-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/escape-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/helpers/escape-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/helpers/format-date-test', ['chapter2-templates/helpers/format-date', 'qunit'], function (format_date, qunit) {

  'use strict';

  qunit.module('Unit | Helper | format date');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = format_date.formatDate(42);
    assert.ok(result);
  });

});
define('chapter2-templates/tests/unit/helpers/format-date-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/format-date-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/helpers/format-date-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/helpers/format-date-time-test', ['chapter2-templates/helpers/format-date-time', 'qunit'], function (format_date_time, qunit) {

  'use strict';

  qunit.module('Unit | Helper | format date time');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = format_date_time.formatDateTime(42);
    assert.ok(result);
  });

});
define('chapter2-templates/tests/unit/helpers/format-date-time-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/format-date-time-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/helpers/format-date-time-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/helpers/format-dateyyyy-mm-dd-test', ['chapter2-templates/helpers/format-dateyyyy-mm-dd', 'qunit'], function (format_dateyyyy_mm_dd, qunit) {

  'use strict';

  qunit.module('Unit | Helper | format dateyyyy mm dd');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = format_dateyyyy_mm_dd.formatDateyyyyMmDd(42);
    assert.ok(result);
  });

});
define('chapter2-templates/tests/unit/helpers/format-dateyyyy-mm-dd-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/format-dateyyyy-mm-dd-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/helpers/format-dateyyyy-mm-dd-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/helpers/my-helper-test', ['chapter2-templates/helpers/my-helper', 'qunit'], function (my_helper, qunit) {

  'use strict';

  qunit.module('Unit | Helper | my helper');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = my_helper.myHelper(42);
    assert.ok(result);
  });

});
define('chapter2-templates/tests/unit/helpers/my-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/my-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/helpers/my-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/helpers/tools-helper-test', ['chapter2-templates/helpers/tools-helper', 'qunit'], function (tools_helper, qunit) {

  'use strict';

  qunit.module('Unit | Helper | tools helper');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = tools_helper.toolsHelper(42);
    assert.ok(result);
  });

});
define('chapter2-templates/tests/unit/helpers/tools-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/tools-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/helpers/tools-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/models/post-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter2-templates/tests/unit/models/post-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/post-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/binding-element-attritubes-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:binding-element-attritubes', 'Unit | Route | binding element attritubes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/binding-element-attritubes-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/binding-element-attritubes-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/binding-element-attritubes-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/dev-helper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:dev-helper', 'Unit | Route | dev helper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/dev-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/dev-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/dev-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/form-helper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:form-helper', 'Unit | Route | form helper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/form-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/form-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/form-helper-test.js should pass jshint.'); 
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
define('chapter2-templates/tests/unit/routes/handlebars-each-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:handlebars-each', 'Unit | Route | handlebars each', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/handlebars-each-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/handlebars-each-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/handlebars-each-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/link-to-helper-example-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:link-to-helper-example', 'Unit | Route | link to helper example', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/link-to-helper-example-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/link-to-helper-example-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/link-to-helper-example-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/myaction-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:myaction', 'Unit | Route | myaction', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/myaction-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/myaction-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/myaction-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/posts-test', ['ember-qunit'], function (ember_qunit) {

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
define('chapter2-templates/tests/unit/routes/posts-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/posts-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/posts.detail-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:posts.detail', 'Unit | Route | posts.detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/posts.detail-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/posts.detail-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts.detail-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/posts/detail-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:posts/detail', 'Unit | Route | posts/detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/posts/detail-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/posts');
  QUnit.test('unit/routes/posts/detail-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts/detail-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/posts/detail/comments-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:posts/detail/comments', 'Unit | Route | posts/detail/comments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/posts/detail/comments-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/posts/detail');
  QUnit.test('unit/routes/posts/detail/comments-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/posts/detail/comments-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/store-categories-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:store-categories', 'Unit | Route | store categories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/store-categories-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/store-categories-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/store-categories-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/routes/tools-helper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:tools-helper', 'Unit | Route | tools helper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chapter2-templates/tests/unit/routes/tools-helper-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/tools-helper-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/tools-helper-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/unit/views/binding-element-attributes-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('view:binding-element-attributes', 'Unit | View | binding element attributes');

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('chapter2-templates/tests/unit/views/binding-element-attributes-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/views');
  QUnit.test('unit/views/binding-element-attributes-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/views/binding-element-attributes-test.js should pass jshint.'); 
  });

});
define('chapter2-templates/tests/views/binding-element-attributes.jshint', function () {

  'use strict';

  QUnit.module('JSHint - views');
  QUnit.test('views/binding-element-attributes.js should pass jshint', function(assert) { 
    assert.ok(true, 'views/binding-element-attributes.js should pass jshint.'); 
  });

});
define('chapter2-templates/views/binding-element-attributes', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	//  app/views/binding-element-attributes.js

	exports['default'] = Ember['default'].View.extend({});

	//  下面是官方给的代码，但很明显看出来这种使用方式不是2.0版本的！！
	//  2.0版本的写法还在学习中，后续在补上，现在为了演示模板效果暂时这么写！毕竟本文的重点还是在模板属性的绑定上

	//  绑定input
	Ember['default'].TextField.reopen({
		attributeBindings: ['data-toggle', 'data-placement']
	});

	//  绑定link-to
	Ember['default'].LinkComponent.reopen({
		attributeBindings: ['data-toggle']
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