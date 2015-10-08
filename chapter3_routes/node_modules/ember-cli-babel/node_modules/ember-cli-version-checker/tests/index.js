var assert = require('assert');
var versionChecker = require('..');
var lodash = require('lodash');

describe('ember-cli-version-checker', function() {
  function FakeAddonAtVersion(version, projectProperties) {
    this.name = 'fake-addon';
    this.project = lodash.assign({}, {
      emberCLIVersion: function() {
        return version;
      }
    }, projectProperties);
  }

  describe('VersionChecker#for', function() {
    var addon, checker;
    beforeEach(function() {
      addon = new FakeAddonAtVersion('0.1.15-addon-discovery-752a419d85', {
        bowerDirectory: 'tests/fixtures/bower-1',
        nodeModulesPath: 'tests/fixtures/npm-1'
      });

      checker = new versionChecker(addon);
    });

    describe('version', function() {
      it('can return a bower version', function() {
        var thing = checker.for('ember', 'bower');

        assert.equal(thing.version, '1.12.1');
      });

      it('can return a fallback bower version for non-tagged releases', function() {
        addon.project.bowerDirectory = 'tests/fixtures/bower-2';

        var thing = checker.for('ember', 'bower');

        assert.equal(thing.version, '1.13.2');
      });

      it('can return a npm version', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.version, '2.0.0');
      });

      it('does not exist in bower_components', function() {
        var thing = checker.for('does-not-exist-dummy', 'bower');

        assert.equal(thing.version, null);
      });

      it('does not exist in nodeModulesPath', function() {
        var thing = checker.for('does-not-exist-dummy', 'npm');

        assert.equal(thing.version, null);
      });
    });

    describe('satisfies', function() {
      it('returns true if version is included within range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.satisfies('>= 0.0.1'), true);
      });

      it('returns false if version is not included within range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.satisfies('>= 99.0.0'), false);
      });
    });

    describe('isAbove', function() {
      it('returns true if version is above the specified range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.isAbove('0.0.1'), true);
      });

      it('returns false if version is below the specified range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.isAbove('99.0.0'), false);
      });
    });

    describe('gt', function() {
      it('returns true if version is above the specified range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.gt('0.0.1'), true);
      });

      it('returns false if version is below the specified range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.gt('99.0.0'), false);
      });
    });

    describe('lt', function() {
      it('returns false if version is above the specified range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.lt('0.0.1'), false);
      });

      it('returns true if version is below the specified range', function() {
        var thing = checker.for('ember', 'npm');

        assert.equal(thing.lt('99.0.0'), true);
      });
    });

    describe('assertAbove', function() {
      it('throws an error with a default message if a matching version was not found', function() {
        var thing = checker.for('ember', 'npm');
        var message = 'The addon `fake-addon` requires the npm package `ember` to be above 999.0.0, but you have 2.0.0.';

        assert.throws(function() {
          thing.assertAbove('999.0.0');
        }, new RegExp(message));
      });

      it('throws an error with the given message if a matching version was not found', function() {
        var message = 'Must use at least Ember CLI 0.1.2 to use xyz feature';
        var thing = checker.for('ember', 'npm');

        assert.throws(function() {
          thing.assertAbove('999.0.0', message);
        }, new RegExp(message));
      });

      it('throws a silent error', function() {
        var message = 'Must use at least Ember CLI 0.1.2 to use xyz feature';
        var thing = checker.for('ember', 'npm');

        assert.throws(function() {
          thing.assertAbove('999.0.0', message);
        },

        function(err) {
          return err.suppressStacktrace;
        });
      });
    });
  });

  describe('isAbove', function() {
    it('handles metadata after version number', function() {
      var addon = new FakeAddonAtVersion('0.1.15-addon-discovery-752a419d85');

      assert.ok(versionChecker.isAbove(addon, '0.0.0'));

      addon = new FakeAddonAtVersion('0.1.15-addon-discovery-752a419d85');

      assert.ok(!versionChecker.isAbove(addon, '100.0.0'));
    });

    it('does not error if addon does not have `project`', function() {
      var addon = {};

      assert.ok(!versionChecker.isAbove(addon, '0.0.0'));
    });

    it('`0.0.1` should be above `0.0.0`', function() {
      var addon = new FakeAddonAtVersion('0.0.1');

      assert.ok(versionChecker.isAbove(addon, '0.0.0'));
    });

    it('`0.1.0` should be above `0.0.46`', function() {
      var addon = new FakeAddonAtVersion('0.1.0');

      assert.ok(versionChecker.isAbove(addon, '0.0.46'));
    });

    it('`0.1.1` should be above `0.1.0`', function() {
      var addon = new FakeAddonAtVersion('0.1.1');

      assert.ok(versionChecker.isAbove(addon, '0.1.0'));
    });

    it('`1.0.0` should be above `0.1.0`', function() {
      var addon = new FakeAddonAtVersion('1.0.0');

      assert.ok(versionChecker.isAbove(addon, '0.1.0'));
    });

    it('`0.1.0` should be below `1.0.0`', function() {
      var addon = new FakeAddonAtVersion('0.1.0');

      assert.ok(!versionChecker.isAbove(addon, '1.0.0'));
    });

    it('`0.1.0` should be below `0.1.2`', function() {
      var addon = new FakeAddonAtVersion('0.1.0');

      assert.ok(!versionChecker.isAbove(addon, '0.1.2'));
    });
  });

  describe('assertAbove', function() {
    it('throws an error with a default message if a matching version was not found', function() {
      var addon = new FakeAddonAtVersion('0.1.0');
      var message = 'The addon `fake-addon` requires an Ember CLI version of 0.1.2 or above, but you are running 0.1.0.';

      assert.throws(function() {
        versionChecker.assertAbove(addon, '0.1.2',message);
      }, new RegExp(message));
    });

    it('throws an error with the given message if a matching version was not found', function() {
      var addon = new FakeAddonAtVersion('0.1.0');
      var message = 'Must use at least Ember CLI 0.1.2 to use xyz feature';

      assert.throws(function() {
        versionChecker.assertAbove(addon, '0.1.2',message);
      }, new RegExp(message));
    });

    it('throws a silent error', function() {
      var addon = new FakeAddonAtVersion('0.1.0');
      var message = 'Must use at least Ember CLI 0.1.2 to use xyz feature';

      assert.throws(function() {
        versionChecker.assertAbove(addon, '0.1.2',message);
      },

      function(err) {
        return err.suppressStacktrace;
      });
    });
  });
});
