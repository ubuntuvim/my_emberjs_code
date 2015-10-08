define('emberfire/initializers/emberfire', ['exports', 'ember', 'ember-data', 'firebase', 'emberfire/adapters/firebase', 'emberfire/serializers/firebase', 'lodash/collection/forEach'], function (exports, Ember, DS, Firebase, FirebaseAdapter, FirebaseSerializer, forEach) {

  'use strict';

  var VERSION = '1.5.0';

  if (Ember['default'].libraries) {
    if (Firebase['default'].SDK_VERSION) {
      Ember['default'].libraries.registerCoreLibrary('Firebase', Firebase['default'].SDK_VERSION);
    }

    Ember['default'].libraries.registerCoreLibrary('EmberFire', VERSION);
  }

  exports['default'] = {
    name: 'emberfire',
    before: 'ember-data',
    initialize: function initialize(container, app) {
      app.register('adapter:-firebase', FirebaseAdapter['default']);
      app.register('serializer:-firebase', FirebaseSerializer['default']);

      // Monkeypatch the store until ED gives us a good way to listen to push events
      if (!DS['default'].Store.prototype._emberfirePatched) {
        DS['default'].Store.reopen({
          _emberfirePatched: true,
          push: function push() {
            var _this = this;

            var result = this._super.apply(this, arguments);
            var records = result;

            if (!Ember['default'].isArray(result)) {
              records = [result];
            }

            forEach['default'](records, function (record) {
              var modelName = record.constructor.modelName;
              var adapter = _this.adapterFor(modelName);
              if (adapter.recordWasPushed) {
                adapter.recordWasPushed(_this, modelName, record);
              }
            });

            return result;
          },

          recordWillUnload: function recordWillUnload(record) {
            var adapter = this.adapterFor(record.constructor.modelName);
            if (adapter.recordWillUnload) {
              adapter.recordWillUnload(this, record);
            }
          },

          recordWillDelete: function recordWillDelete(record) {
            var adapter = this.adapterFor(record.constructor.modelName);
            if (adapter.recordWillDelete) {
              adapter.recordWillDelete(this, record);
            }
          }
        });
      }

      if (!DS['default'].Model.prototype._emberfirePatched) {
        DS['default'].Model.reopen({
          _emberfirePatched: true,
          unloadRecord: function unloadRecord() {
            this.store.recordWillUnload(this);
            return this._super();
          },
          deleteRecord: function deleteRecord() {
            this.store.recordWillDelete(this);
            this._super();
          },

          ref: function ref() {
            var adapter = this.store.adapterFor(this.constructor.modelName);
            if (adapter._getAbsoluteRef) {
              return adapter._getAbsoluteRef(this);
            }
          }
        });
      }

      if (!DS['default'].AdapterPopulatedRecordArray.prototype._emberfirePatched) {
        DS['default'].AdapterPopulatedRecordArray.reopen({
          _emberfirePatched: true,
          willDestroy: function willDestroy() {
            if (this.__firebaseCleanup) {
              this.__firebaseCleanup();
            }
            return this._super();
          }
        });
      }

      DS['default'].FirebaseAdapter = FirebaseAdapter['default'];
      DS['default'].FirebaseSerializer = FirebaseSerializer['default'];
    }
  };

});