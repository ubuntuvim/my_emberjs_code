# SRI for broccoli
[![build status](https://secure.travis-ci.org/jonathanKingston/broccoli-sri-hash.svg)](http://travis-ci.org/jonathanKingston/broccoli-sri-hash)
[![build status](https://ci.appveyor.com/api/projects/status/github/jonathanKingston/broccoli-sri-hash?branch=master&svg=true)](https://ci.appveyor.com/project/jonathanKingston/broccoli-sri-hash/branch/master)
[![npm status](http://img.shields.io/npm/v/broccoli-sri-hash.svg)](https://www.npmjs.org/package/broccoli-sri-hash)
[![dependency status](https://david-dm.org/jonathanKingston/broccoli-sri-hash.svg)](https://david-dm.org/jonathanKingston/broccoli-sri-hash)

This plugin looks at an apps html files to rewrite their content with integrity attributes.

### Options

- **origin** - if `crossorigin` isn't specified but `prepend` is it will add an integrity if `prepend` starts with `origin`
- **crossorigin** - adds a crossorigin attribute to script and link elements
    - This is **required** for CORS resources values are:
        - `use-credentials`
        - `anonymous`
- **prepend** - resources with a full path will only get an applied integrity if the md5 checksum passes
- **paranoiaCheck** - true by default, this turns off the integrity attribute if any Unicode is found within the file.

### Example
```
var sriTree = sri('path/to/code, {
  prefix: 'https://example.com/',
  crossorigin: 'anonymous'
});
```

### 'paranoiaCheck'

Currently there is an encoding issue based on certain characters which is [still being debugged](https://code.google.com/p/chromium/issues/detail?id=527286) when using Chrome.
This check fails if there is any non ASCII characters. On failure the file won't have a integrity attribute added.
**Please note** this will be removed as a default in the future; with the desire to remove all of the checking code too.
