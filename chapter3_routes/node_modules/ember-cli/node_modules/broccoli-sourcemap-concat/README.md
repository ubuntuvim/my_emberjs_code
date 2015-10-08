Broccoli concatenator that generates & propagates sourcemaps
-------------------------------------------------

This filter is designed to be fast & good enough. It can generates
source maps substantially faster than you'll get via
mozilla/source-map, because it's special-cased for straight
line-to-line contenation.

It discovers input sourcemaps in relative URLs, including data URIs.

```js
var node = concat(node, {
  outputFile: '/output.js',
  inputFiles: ['loader.js', '**/*']
});
```
