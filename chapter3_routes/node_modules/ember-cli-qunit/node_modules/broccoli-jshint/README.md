# Broccoli JSHint

[![Build Status](https://travis-ci.org/rwjblue/broccoli-jshint.svg?branch=master)](https://travis-ci.org/rwjblue/broccoli-jshint)

Run JSHint on the provided node.

## Usage

```javascript
var JSHinter = require('broccoli-jshint');

// Assuming someNode contains .js files
var node = new JSHinter(someNode);
```

## Documentation

### `new JSHinter(inputNode, options)`

---

`options.jshintrcRoot` *{String}*

Will look in the root of the provided node for a `.jshintrc`. If you would prefer to use another specific root
for looking up your JSHint config, supply this option.

Default: **input node root**

---

`options.jshintrcPath` *{String}*

Specify the path to the `.jshintrc` that you would like to use. Use this option if you would like to use a `.jshintrc`
file from a path that is not in the same hierarchy as your input node (if it is use the `.jshintrcRoot`).

Default: **undefined**

---

`options.log` *{true|false}*

Should we log errors to the console?

Default: **true**

---

`options.disableTestGenerator` *{true|false}*

If `true` tests will not be generated.

Default: **false**

---

`options.testGenerator` *{Function}*

The function used to generate test modules. You can provide a custom function for your client side testing framework of choice.

The function receives the following arguments:

* `relativePath` - The relative path to the file being tested.
* `errors` - A generated string of errors found.

Default generates QUnit style tests:

```javascript
var path = require('path');

function(relativePath, errors) {
  return "module('" + path.dirname(relativePath) + '");";
         "test('" + relativePath + "' should pass jshint', function() { " +
         "  ok(passed, moduleName+" should pass jshint."+(errors ? "\n"+errors : '')); " +
         "});
};
```
---

`options.console` *{Object}*

Allows you to provide a custom `console` object. This is useful if you have to supress console output in CI for example.

Default: **`console`**

---

`options.annotation` *{String}*

A human-readable description for this plugin instance.

Default: **undefined**

## ZOMG!!! TESTS?!?!!?

I know, right?

Running the tests:

```javascript
npm install
npm test
```

## License

This project is distributed under the MIT license.
