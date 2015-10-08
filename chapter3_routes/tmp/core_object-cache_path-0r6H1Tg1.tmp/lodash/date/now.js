define('lodash/date/now', ['exports', 'lodash/internal/getNative'], function (exports, getNative) {

  'use strict';

  var nativeNow = getNative['default'](Date, 'now');

  /**
   * Gets the number of milliseconds that have elapsed since the Unix epoch
   * (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @category Date
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => logs the number of milliseconds it took for the deferred function to be invoked
   */
  var now = nativeNow || function () {
    return new Date().getTime();
  };

  exports['default'] = now;

});