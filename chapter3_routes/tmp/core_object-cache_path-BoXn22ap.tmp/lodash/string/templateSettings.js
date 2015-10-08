define('lodash/string/templateSettings', ['exports', 'lodash/string/escape', 'lodash/internal/reEscape', 'lodash/internal/reEvaluate', 'lodash/internal/reInterpolate'], function (exports, escape, reEscape, reEvaluate, reInterpolate) {

  'use strict';

  var templateSettings = {

    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'escape': reEscape['default'],

    /**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'evaluate': reEvaluate['default'],

    /**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'interpolate': reInterpolate['default'],

    /**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type string
     */
    'variable': '',

    /**
     * Used to import variables into the compiled template.
     *
     * @memberOf _.templateSettings
     * @type Object
     */
    'imports': {

      /**
       * A reference to the `lodash` function.
       *
       * @memberOf _.templateSettings.imports
       * @type Function
       */
      '_': { 'escape': escape['default'] }
    }
  };

  exports['default'] = templateSettings;

});