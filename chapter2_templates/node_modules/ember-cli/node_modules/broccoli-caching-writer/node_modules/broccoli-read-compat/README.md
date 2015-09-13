# broccoli-read-compat

This packages allows you to use Broccoli's new `.rebuild` API and still
support the legacy `.read` interface required for older Broccoli versions.

## Usage

When defining your plugin, call `readAPICompat.wrapFactory` to add the legacy
`.read` and `.cleanup` functions.

```javascript
var fs = require('fs');
var readAPICompat = require('broccoli-read-compat');

function MyAwesomePlugin() { }

MyAwesomePlugin.prototype.rebuild = function() {
  var outputPath = this.outputPath;

  fs.writeFileSync(outputPath + '/' + 'awesome.txt', 'special sauce');
};

readAPICompat.wrapFactory(MyAwesomePlugin);
```

