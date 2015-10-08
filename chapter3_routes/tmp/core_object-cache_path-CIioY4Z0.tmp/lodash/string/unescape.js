define('lodash/string/unescape', ['exports', 'lodash/internal/baseToString', 'lodash/internal/unescapeHtmlChar'], function (exports, baseToString, unescapeHtmlChar) {

    'use strict';

    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
        reHasEscapedHtml = RegExp(reEscapedHtml.source);

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
     * corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
     * entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
        string = baseToString['default'](string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar['default']) : string;
    }

    exports['default'] = unescape;

});