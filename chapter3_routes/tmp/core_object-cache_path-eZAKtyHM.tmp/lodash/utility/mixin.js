define('lodash/utility/mixin', ['exports', 'lodash/internal/arrayCopy', 'lodash/internal/arrayPush', 'lodash/internal/baseFunctions', 'lodash/lang/isFunction', 'lodash/lang/isObject', 'lodash/object/keys'], function (exports, arrayCopy, arrayPush, baseFunctions, isFunction, isObject, keys) {

  'use strict';

  function mixin(object, source, options) {
    var methodNames = baseFunctions['default'](source, keys['default'](source));

    var chain = true,
        index = -1,
        isFunc = isFunction['default'](object),
        length = methodNames.length;

    if (options === false) {
      chain = false;
    } else if (isObject['default'](options) && 'chain' in options) {
      chain = options.chain;
    }
    while (++index < length) {
      var methodName = methodNames[index],
          func = source[methodName];

      object[methodName] = func;
      if (isFunc) {
        object.prototype[methodName] = (function (func) {
          return function () {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = arrayCopy['default'](this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush['default']([this.value()], arguments));
          };
        })(func);
      }
    }
    return object;
  }

  exports['default'] = mixin;

});