define('lodash/function/bindAll', ['exports', 'lodash/internal/baseFlatten', 'lodash/internal/createWrapper', 'lodash/object/functions', 'lodash/function/restParam'], function (exports, baseFlatten, createWrapper, functions, restParam) {

  'use strict';

  var BIND_FLAG = 1;

  /**
   * Binds methods of an object to the object itself, overwriting the existing
   * method. Method names may be specified as individual arguments or as arrays
   * of method names. If no method names are provided all enumerable function
   * properties, own and inherited, of `object` are bound.
   *
   * **Note:** This method does not set the "length" property of bound functions.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {...(string|string[])} [methodNames] The object method names to bind,
   *  specified as individual method names or arrays of method names.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var view = {
   *   'label': 'docs',
   *   'onClick': function() {
   *     console.log('clicked ' + this.label);
   *   }
   * };
   *
   * _.bindAll(view);
   * jQuery('#docs').on('click', view.onClick);
   * // => logs 'clicked docs' when the element is clicked
   */
  var bindAll = restParam['default'](function (object, methodNames) {
    methodNames = methodNames.length ? baseFlatten['default'](methodNames) : functions['default'](object);

    var index = -1,
        length = methodNames.length;

    while (++index < length) {
      var key = methodNames[index];
      object[key] = createWrapper['default'](object[key], BIND_FLAG, object);
    }
    return object;
  });

  exports['default'] = bindAll;

});