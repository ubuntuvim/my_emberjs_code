var fs = require('fs')
var RSVP = require('rsvp')
var quickTemp = require('quick-temp')
var mapSeries = require('promise-map-series')
var rimraf = require('rimraf')


// Wrap a new-style plugin to provide the .read API
function NewStyleTreeWrapper (newStyleTree) {
  if (!(this instanceof NewStyleTreeWrapper)) { return new NewStyleTreeWrapper(newStyleTree); }

  this.newStyleTree = newStyleTree
  this.description = newStyleTree.description ||
    (newStyleTree.constructor && newStyleTree.constructor.name) ||
    'NewStyleTreeWrapper'
}
wrapFactory(NewStyleTreeWrapper);

function wrapFactory(klass) {
  klass.prototype.isReadAPICompatTree = true;
  klass.prototype.read = read;

  var originalCleanup = klass.prototype.cleanup;

  klass.prototype.cleanup = function() {
    cleanup.call(this);

    if (originalCleanup) {
      return originalCleanup.call(this);
    }
  }
}

function read(readTree) {
  // if the constructor was not called directly just operate on `this`
  var tree = this.newStyleTree || this;

  quickTemp.makeOrReuse(tree, 'cachePath')
  quickTemp.makeOrReuse(tree, 'outputPath') // reuse to keep name across rebuilds
  rimraf.sync(tree.outputPath)
  fs.mkdirSync(tree.outputPath)

  if (!tree.inputTrees && !tree.inputTree) {
    throw new Error('No inputTree/inputTrees set on tree: ' + this.description)
  }
  if (tree.inputTree && tree.inputTrees) {
    throw new Error('Cannot have both inputTree and inputTrees: ' + this.description)
  }

  var inputTrees = tree.inputTrees || [tree.inputTree]
  return mapSeries(inputTrees, readTree)
    .then(function (inputPaths) {
      if (tree.inputTree) { // singular
        tree.inputPath = inputPaths[0]
      } else { // plural
        tree.inputPaths = inputPaths
      }
      return RSVP.resolve().then(function () {
        return tree.rebuild()
      }).then(function () {
        return tree.outputPath
      }, function (err) {
        // Pull in properties from broccoliInfo, and wipe properties that we
        // won't support under the new API
        delete err.treeDir
        var broccoliInfo = err.broccoliInfo || {}
        err.file = broccoliInfo.file
        err.line = broccoliInfo.firstLine
        err.column = broccoliInfo.firstColumn
        throw err
      })
    })
}

function cleanup() {
  // if the constructor was not called directly just operate on `this`
  var tree = this.newStyleTree || this;

  quickTemp.remove(tree, 'outputPath')
  quickTemp.remove(tree, 'cachePath')
  if (this.newStyleTree && this.newStyleTree.cleanup) {
    return this.newStyleTree.cleanup()
  }
}


module.exports = {
  wrapInstance: NewStyleTreeWrapper,
  wrapFactory: wrapFactory
}
