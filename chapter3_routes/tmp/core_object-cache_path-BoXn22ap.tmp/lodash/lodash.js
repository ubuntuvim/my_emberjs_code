define('lodash/lodash', ['exports', 'lodash/array', 'lodash/chain', 'lodash/collection', 'lodash/date', 'lodash/function', 'lodash/lang', 'lodash/math', 'lodash/number', 'lodash/object', 'lodash/string', 'lodash/utility', 'lodash/internal/LazyWrapper', 'lodash/internal/LodashWrapper', 'lodash/internal/arrayEach', 'lodash/internal/arrayPush', 'lodash/internal/baseCallback', 'lodash/internal/baseForOwn', 'lodash/internal/baseFunctions', 'lodash/internal/baseMatches', 'lodash/internal/createHybridWrapper', 'lodash/utility/identity', 'lodash/lang/isArray', 'lodash/lang/isObject', 'lodash/object/keys', 'lodash/array/last', 'lodash/internal/lazyClone', 'lodash/internal/lazyReverse', 'lodash/internal/lazyValue', 'lodash/chain/lodash', 'lodash/utility/mixin', 'lodash/utility/property', 'lodash/internal/realNames', 'lodash/support', 'lodash/chain/thru'], function (exports, array, chain, collection, date, _function, lang, math, number, ___object, string, utility, LazyWrapper, LodashWrapper, arrayEach, arrayPush, baseCallback, baseForOwn, baseFunctions, baseMatches, createHybridWrapper, identity, isArray, isObject, keys, last, lazyClone, lazyReverse, lazyValue, lodash, _mixin, property, realNames, support, thru) {

  'use strict';

  /**
   * @license
   * lodash 3.10.0 (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize modern exports="es" -o ./`
   * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <https://lodash.com/license>
   */
  var VERSION = '3.10.0';

  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_KEY_FLAG = 2;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_MAP_FLAG = 2;

  /** Used for native method references. */
  var arrayProto = Array.prototype,
      stringProto = String.prototype;

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeFloor = Math.floor,
      nativeMax = Math.max,
      nativeMin = Math.min;

  /** Used as references for `-Infinity` and `Infinity`. */
  var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

  // wrap `_.mixin` so it works when provided only one argument
  var mixin = (function (func) {
    return function (object, source, options) {
      if (options == null) {
        var isObj = isObject['default'](source),
            props = isObj && keys['default'](source),
            methodNames = props && props.length && baseFunctions['default'](source, props);

        if (!(methodNames ? methodNames.length : isObj)) {
          options = source;
          source = object;
          object = this;
        }
      }
      return func(object, source, options);
    };
  })(_mixin['default']);

  // Add functions that return wrapped values when chaining.
  lodash['default'].after = _function['default'].after;
  lodash['default'].ary = _function['default'].ary;
  lodash['default'].assign = ___object['default'].assign;
  lodash['default'].at = collection['default'].at;
  lodash['default'].before = _function['default'].before;
  lodash['default'].bind = _function['default'].bind;
  lodash['default'].bindAll = _function['default'].bindAll;
  lodash['default'].bindKey = _function['default'].bindKey;
  lodash['default'].callback = utility['default'].callback;
  lodash['default'].chain = chain['default'].chain;
  lodash['default'].chunk = array['default'].chunk;
  lodash['default'].compact = array['default'].compact;
  lodash['default'].constant = utility['default'].constant;
  lodash['default'].countBy = collection['default'].countBy;
  lodash['default'].create = ___object['default'].create;
  lodash['default'].curry = _function['default'].curry;
  lodash['default'].curryRight = _function['default'].curryRight;
  lodash['default'].debounce = _function['default'].debounce;
  lodash['default'].defaults = ___object['default'].defaults;
  lodash['default'].defaultsDeep = ___object['default'].defaultsDeep;
  lodash['default'].defer = _function['default'].defer;
  lodash['default'].delay = _function['default'].delay;
  lodash['default'].difference = array['default'].difference;
  lodash['default'].drop = array['default'].drop;
  lodash['default'].dropRight = array['default'].dropRight;
  lodash['default'].dropRightWhile = array['default'].dropRightWhile;
  lodash['default'].dropWhile = array['default'].dropWhile;
  lodash['default'].fill = array['default'].fill;
  lodash['default'].filter = collection['default'].filter;
  lodash['default'].flatten = array['default'].flatten;
  lodash['default'].flattenDeep = array['default'].flattenDeep;
  lodash['default'].flow = _function['default'].flow;
  lodash['default'].flowRight = _function['default'].flowRight;
  lodash['default'].forEach = collection['default'].forEach;
  lodash['default'].forEachRight = collection['default'].forEachRight;
  lodash['default'].forIn = ___object['default'].forIn;
  lodash['default'].forInRight = ___object['default'].forInRight;
  lodash['default'].forOwn = ___object['default'].forOwn;
  lodash['default'].forOwnRight = ___object['default'].forOwnRight;
  lodash['default'].functions = ___object['default'].functions;
  lodash['default'].groupBy = collection['default'].groupBy;
  lodash['default'].indexBy = collection['default'].indexBy;
  lodash['default'].initial = array['default'].initial;
  lodash['default'].intersection = array['default'].intersection;
  lodash['default'].invert = ___object['default'].invert;
  lodash['default'].invoke = collection['default'].invoke;
  lodash['default'].keys = keys['default'];
  lodash['default'].keysIn = ___object['default'].keysIn;
  lodash['default'].map = collection['default'].map;
  lodash['default'].mapKeys = ___object['default'].mapKeys;
  lodash['default'].mapValues = ___object['default'].mapValues;
  lodash['default'].matches = utility['default'].matches;
  lodash['default'].matchesProperty = utility['default'].matchesProperty;
  lodash['default'].memoize = _function['default'].memoize;
  lodash['default'].merge = ___object['default'].merge;
  lodash['default'].method = utility['default'].method;
  lodash['default'].methodOf = utility['default'].methodOf;
  lodash['default'].mixin = mixin;
  lodash['default'].modArgs = _function['default'].modArgs;
  lodash['default'].negate = _function['default'].negate;
  lodash['default'].omit = ___object['default'].omit;
  lodash['default'].once = _function['default'].once;
  lodash['default'].pairs = ___object['default'].pairs;
  lodash['default'].partial = _function['default'].partial;
  lodash['default'].partialRight = _function['default'].partialRight;
  lodash['default'].partition = collection['default'].partition;
  lodash['default'].pick = ___object['default'].pick;
  lodash['default'].pluck = collection['default'].pluck;
  lodash['default'].property = property['default'];
  lodash['default'].propertyOf = utility['default'].propertyOf;
  lodash['default'].pull = array['default'].pull;
  lodash['default'].pullAt = array['default'].pullAt;
  lodash['default'].range = utility['default'].range;
  lodash['default'].rearg = _function['default'].rearg;
  lodash['default'].reject = collection['default'].reject;
  lodash['default'].remove = array['default'].remove;
  lodash['default'].rest = array['default'].rest;
  lodash['default'].restParam = _function['default'].restParam;
  lodash['default'].set = ___object['default'].set;
  lodash['default'].shuffle = collection['default'].shuffle;
  lodash['default'].slice = array['default'].slice;
  lodash['default'].sortBy = collection['default'].sortBy;
  lodash['default'].sortByAll = collection['default'].sortByAll;
  lodash['default'].sortByOrder = collection['default'].sortByOrder;
  lodash['default'].spread = _function['default'].spread;
  lodash['default'].take = array['default'].take;
  lodash['default'].takeRight = array['default'].takeRight;
  lodash['default'].takeRightWhile = array['default'].takeRightWhile;
  lodash['default'].takeWhile = array['default'].takeWhile;
  lodash['default'].tap = chain['default'].tap;
  lodash['default'].throttle = _function['default'].throttle;
  lodash['default'].thru = thru['default'];
  lodash['default'].times = utility['default'].times;
  lodash['default'].toArray = lang['default'].toArray;
  lodash['default'].toPlainObject = lang['default'].toPlainObject;
  lodash['default'].transform = ___object['default'].transform;
  lodash['default'].union = array['default'].union;
  lodash['default'].uniq = array['default'].uniq;
  lodash['default'].unzip = array['default'].unzip;
  lodash['default'].unzipWith = array['default'].unzipWith;
  lodash['default'].values = ___object['default'].values;
  lodash['default'].valuesIn = ___object['default'].valuesIn;
  lodash['default'].where = collection['default'].where;
  lodash['default'].without = array['default'].without;
  lodash['default'].wrap = _function['default'].wrap;
  lodash['default'].xor = array['default'].xor;
  lodash['default'].zip = array['default'].zip;
  lodash['default'].zipObject = array['default'].zipObject;
  lodash['default'].zipWith = array['default'].zipWith;

  // Add aliases.
  lodash['default'].backflow = _function['default'].flowRight;
  lodash['default'].collect = collection['default'].map;
  lodash['default'].compose = _function['default'].flowRight;
  lodash['default'].each = collection['default'].forEach;
  lodash['default'].eachRight = collection['default'].forEachRight;
  lodash['default'].extend = ___object['default'].assign;
  lodash['default'].iteratee = utility['default'].callback;
  lodash['default'].methods = ___object['default'].functions;
  lodash['default'].object = array['default'].zipObject;
  lodash['default'].select = collection['default'].filter;
  lodash['default'].tail = array['default'].rest;
  lodash['default'].unique = array['default'].uniq;

  // Add functions to `lodash.prototype`.
  mixin(lodash['default'], lodash['default']);

  // Add functions that return unwrapped values when chaining.
  lodash['default'].add = math['default'].add;
  lodash['default'].attempt = utility['default'].attempt;
  lodash['default'].camelCase = string['default'].camelCase;
  lodash['default'].capitalize = string['default'].capitalize;
  lodash['default'].ceil = math['default'].ceil;
  lodash['default'].clone = lang['default'].clone;
  lodash['default'].cloneDeep = lang['default'].cloneDeep;
  lodash['default'].deburr = string['default'].deburr;
  lodash['default'].endsWith = string['default'].endsWith;
  lodash['default'].escape = string['default'].escape;
  lodash['default'].escapeRegExp = string['default'].escapeRegExp;
  lodash['default'].every = collection['default'].every;
  lodash['default'].find = collection['default'].find;
  lodash['default'].findIndex = array['default'].findIndex;
  lodash['default'].findKey = ___object['default'].findKey;
  lodash['default'].findLast = collection['default'].findLast;
  lodash['default'].findLastIndex = array['default'].findLastIndex;
  lodash['default'].findLastKey = ___object['default'].findLastKey;
  lodash['default'].findWhere = collection['default'].findWhere;
  lodash['default'].first = array['default'].first;
  lodash['default'].floor = math['default'].floor;
  lodash['default'].get = ___object['default'].get;
  lodash['default'].gt = lang['default'].gt;
  lodash['default'].gte = lang['default'].gte;
  lodash['default'].has = ___object['default'].has;
  lodash['default'].identity = identity['default'];
  lodash['default'].includes = collection['default'].includes;
  lodash['default'].indexOf = array['default'].indexOf;
  lodash['default'].inRange = number['default'].inRange;
  lodash['default'].isArguments = lang['default'].isArguments;
  lodash['default'].isArray = isArray['default'];
  lodash['default'].isBoolean = lang['default'].isBoolean;
  lodash['default'].isDate = lang['default'].isDate;
  lodash['default'].isElement = lang['default'].isElement;
  lodash['default'].isEmpty = lang['default'].isEmpty;
  lodash['default'].isEqual = lang['default'].isEqual;
  lodash['default'].isError = lang['default'].isError;
  lodash['default'].isFinite = lang['default'].isFinite;
  lodash['default'].isFunction = lang['default'].isFunction;
  lodash['default'].isMatch = lang['default'].isMatch;
  lodash['default'].isNaN = lang['default'].isNaN;
  lodash['default'].isNative = lang['default'].isNative;
  lodash['default'].isNull = lang['default'].isNull;
  lodash['default'].isNumber = lang['default'].isNumber;
  lodash['default'].isObject = isObject['default'];
  lodash['default'].isPlainObject = lang['default'].isPlainObject;
  lodash['default'].isRegExp = lang['default'].isRegExp;
  lodash['default'].isString = lang['default'].isString;
  lodash['default'].isTypedArray = lang['default'].isTypedArray;
  lodash['default'].isUndefined = lang['default'].isUndefined;
  lodash['default'].kebabCase = string['default'].kebabCase;
  lodash['default'].last = last['default'];
  lodash['default'].lastIndexOf = array['default'].lastIndexOf;
  lodash['default'].lt = lang['default'].lt;
  lodash['default'].lte = lang['default'].lte;
  lodash['default'].max = math['default'].max;
  lodash['default'].min = math['default'].min;
  lodash['default'].noop = utility['default'].noop;
  lodash['default'].now = date['default'].now;
  lodash['default'].pad = string['default'].pad;
  lodash['default'].padLeft = string['default'].padLeft;
  lodash['default'].padRight = string['default'].padRight;
  lodash['default'].parseInt = string['default'].parseInt;
  lodash['default'].random = number['default'].random;
  lodash['default'].reduce = collection['default'].reduce;
  lodash['default'].reduceRight = collection['default'].reduceRight;
  lodash['default'].repeat = string['default'].repeat;
  lodash['default'].result = ___object['default'].result;
  lodash['default'].round = math['default'].round;
  lodash['default'].size = collection['default'].size;
  lodash['default'].snakeCase = string['default'].snakeCase;
  lodash['default'].some = collection['default'].some;
  lodash['default'].sortedIndex = array['default'].sortedIndex;
  lodash['default'].sortedLastIndex = array['default'].sortedLastIndex;
  lodash['default'].startCase = string['default'].startCase;
  lodash['default'].startsWith = string['default'].startsWith;
  lodash['default'].sum = math['default'].sum;
  lodash['default'].template = string['default'].template;
  lodash['default'].trim = string['default'].trim;
  lodash['default'].trimLeft = string['default'].trimLeft;
  lodash['default'].trimRight = string['default'].trimRight;
  lodash['default'].trunc = string['default'].trunc;
  lodash['default'].unescape = string['default'].unescape;
  lodash['default'].uniqueId = utility['default'].uniqueId;
  lodash['default'].words = string['default'].words;

  // Add aliases.
  lodash['default'].all = collection['default'].every;
  lodash['default'].any = collection['default'].some;
  lodash['default'].contains = collection['default'].includes;
  lodash['default'].eq = lang['default'].isEqual;
  lodash['default'].detect = collection['default'].find;
  lodash['default'].foldl = collection['default'].reduce;
  lodash['default'].foldr = collection['default'].reduceRight;
  lodash['default'].head = array['default'].first;
  lodash['default'].include = collection['default'].includes;
  lodash['default'].inject = collection['default'].reduce;

  mixin(lodash['default'], (function () {
    var source = {};
    baseForOwn['default'](lodash['default'], function (func, methodName) {
      if (!lodash['default'].prototype[methodName]) {
        source[methodName] = func;
      }
    });
    return source;
  })(), false);

  // Add functions capable of returning wrapped and unwrapped values when chaining.
  lodash['default'].sample = collection['default'].sample;

  lodash['default'].prototype.sample = function (n) {
    if (!this.__chain__ && n == null) {
      return collection['default'].sample(this.value());
    }
    return this.thru(function (value) {
      return collection['default'].sample(value, n);
    });
  };

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type string
   */
  lodash['default'].VERSION = VERSION;

  lodash['default'].support = support['default'];
  (lodash['default'].templateSettings = string['default'].templateSettings).imports._ = lodash['default'];

  // Assign default placeholders.
  arrayEach['default'](['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
    lodash['default'][methodName].placeholder = lodash['default'];
  });

  // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
  arrayEach['default'](['drop', 'take'], function (methodName, index) {
    LazyWrapper['default'].prototype[methodName] = function (n) {
      var filtered = this.__filtered__;
      if (filtered && !index) {
        return new LazyWrapper['default'](this);
      }
      n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

      var result = this.clone();
      if (filtered) {
        result.__takeCount__ = nativeMin(result.__takeCount__, n);
      } else {
        result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
      }
      return result;
    };

    LazyWrapper['default'].prototype[methodName + 'Right'] = function (n) {
      return this.reverse()[methodName](n).reverse();
    };
  });

  // Add `LazyWrapper` methods that accept an `iteratee` value.
  arrayEach['default'](['filter', 'map', 'takeWhile'], function (methodName, index) {
    var type = index + 1,
        isFilter = type != LAZY_MAP_FLAG;

    LazyWrapper['default'].prototype[methodName] = function (iteratee, thisArg) {
      var result = this.clone();
      result.__iteratees__.push({ 'iteratee': baseCallback['default'](iteratee, thisArg, 1), 'type': type });
      result.__filtered__ = result.__filtered__ || isFilter;
      return result;
    };
  });

  // Add `LazyWrapper` methods for `_.first` and `_.last`.
  arrayEach['default'](['first', 'last'], function (methodName, index) {
    var takeName = 'take' + (index ? 'Right' : '');

    LazyWrapper['default'].prototype[methodName] = function () {
      return this[takeName](1).value()[0];
    };
  });

  // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
  arrayEach['default'](['initial', 'rest'], function (methodName, index) {
    var dropName = 'drop' + (index ? '' : 'Right');

    LazyWrapper['default'].prototype[methodName] = function () {
      return this.__filtered__ ? new LazyWrapper['default'](this) : this[dropName](1);
    };
  });

  // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
  arrayEach['default'](['pluck', 'where'], function (methodName, index) {
    var operationName = index ? 'filter' : 'map',
        createCallback = index ? baseMatches['default'] : property['default'];

    LazyWrapper['default'].prototype[methodName] = function (value) {
      return this[operationName](createCallback(value));
    };
  });

  LazyWrapper['default'].prototype.compact = function () {
    return this.filter(identity['default']);
  };

  LazyWrapper['default'].prototype.reject = function (predicate, thisArg) {
    predicate = baseCallback['default'](predicate, thisArg, 1);
    return this.filter(function (value) {
      return !predicate(value);
    });
  };

  LazyWrapper['default'].prototype.slice = function (start, end) {
    start = start == null ? 0 : +start || 0;

    var result = this;
    if (result.__filtered__ && (start > 0 || end < 0)) {
      return new LazyWrapper['default'](result);
    }
    if (start < 0) {
      result = result.takeRight(-start);
    } else if (start) {
      result = result.drop(start);
    }
    if (end !== undefined) {
      end = +end || 0;
      result = end < 0 ? result.dropRight(-end) : result.take(end - start);
    }
    return result;
  };

  LazyWrapper['default'].prototype.takeRightWhile = function (predicate, thisArg) {
    return this.reverse().takeWhile(predicate, thisArg).reverse();
  };

  LazyWrapper['default'].prototype.toArray = function () {
    return this.take(POSITIVE_INFINITY);
  };

  // Add `LazyWrapper` methods to `lodash.prototype`.
  baseForOwn['default'](LazyWrapper['default'].prototype, function (func, methodName) {
    var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
        retUnwrapped = /^(?:first|last)$/.test(methodName),
        lodashFunc = lodash['default'][retUnwrapped ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName];

    if (!lodashFunc) {
      return;
    }
    lodash['default'].prototype[methodName] = function () {
      var args = retUnwrapped ? [1] : arguments,
          chainAll = this.__chain__,
          value = this.__wrapped__,
          isHybrid = !!this.__actions__.length,
          isLazy = value instanceof LazyWrapper['default'],
          iteratee = args[0],
          useLazy = isLazy || isArray['default'](value);

      if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
        // Avoid lazy use if the iteratee has a "length" value other than `1`.
        isLazy = useLazy = false;
      }
      var interceptor = function interceptor(value) {
        return retUnwrapped && chainAll ? lodashFunc(value, 1)[0] : lodashFunc.apply(undefined, arrayPush['default']([value], args));
      };

      var action = { 'func': thru['default'], 'args': [interceptor], 'thisArg': undefined },
          onlyLazy = isLazy && !isHybrid;

      if (retUnwrapped && !chainAll) {
        if (onlyLazy) {
          value = value.clone();
          value.__actions__.push(action);
          return func.call(value);
        }
        return lodashFunc.call(undefined, this.value())[0];
      }
      if (!retUnwrapped && useLazy) {
        value = onlyLazy ? value : new LazyWrapper['default'](this);
        var result = func.apply(value, args);
        result.__actions__.push(action);
        return new LodashWrapper['default'](result, chainAll);
      }
      return this.thru(interceptor);
    };
  });

  // Add `Array` and `String` methods to `lodash.prototype`.
  arrayEach['default'](['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function (methodName) {
    var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
        chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
        retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

    lodash['default'].prototype[methodName] = function () {
      var args = arguments;
      if (retUnwrapped && !this.__chain__) {
        return func.apply(this.value(), args);
      }
      return this[chainName](function (value) {
        return func.apply(value, args);
      });
    };
  });

  // Map minified function names to their real names.
  baseForOwn['default'](LazyWrapper['default'].prototype, function (func, methodName) {
    var lodashFunc = lodash['default'][methodName];
    if (lodashFunc) {
      var key = lodashFunc.name,
          names = realNames['default'][key] || (realNames['default'][key] = []);

      names.push({ 'name': methodName, 'func': lodashFunc });
    }
  });

  realNames['default'][createHybridWrapper['default'](undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

  // Add functions to the lazy wrapper.
  LazyWrapper['default'].prototype.clone = lazyClone['default'];
  LazyWrapper['default'].prototype.reverse = lazyReverse['default'];
  LazyWrapper['default'].prototype.value = lazyValue['default'];

  // Add chaining functions to the `lodash` wrapper.
  lodash['default'].prototype.chain = chain['default'].wrapperChain;
  lodash['default'].prototype.commit = chain['default'].commit;
  lodash['default'].prototype.concat = chain['default'].concat;
  lodash['default'].prototype.plant = chain['default'].plant;
  lodash['default'].prototype.reverse = chain['default'].reverse;
  lodash['default'].prototype.toString = chain['default'].toString;
  lodash['default'].prototype.run = lodash['default'].prototype.toJSON = lodash['default'].prototype.valueOf = lodash['default'].prototype.value = chain['default'].value;

  // Add function aliases to the `lodash` wrapper.
  lodash['default'].prototype.collect = lodash['default'].prototype.map;
  lodash['default'].prototype.head = lodash['default'].prototype.first;
  lodash['default'].prototype.select = lodash['default'].prototype.filter;
  lodash['default'].prototype.tail = lodash['default'].prototype.rest;

  exports['default'] = lodash['default'];

});