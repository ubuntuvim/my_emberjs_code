import Ember from 'ember';
import DS from 'ember-data';
import Firebase from 'firebase';
import FirebaseAdapter from '../adapters/firebase';
import FirebaseSerializer from '../serializers/firebase';
import forEach from 'lodash/collection/forEach';

var VERSION = '1.5.0';

if (Ember.libraries) {
  if (Firebase.SDK_VERSION) {
    Ember.libraries.registerCoreLibrary('Firebase', Firebase.SDK_VERSION);
  }

  Ember.libraries.registerCoreLibrary('EmberFire', VERSION);
}

export default {
  name: 'emberfire',
  before: 'ember-data',
  initialize: function initialize(container, app) {
    app.register('adapter:-firebase', FirebaseAdapter);
    app.register('serializer:-firebase', FirebaseSerializer);

    // Monkeypatch the store until ED gives us a good way to listen to push events
    if (!DS.Store.prototype._emberfirePatched) {
      DS.Store.reopen({
        _emberfirePatched: true,
        push: function push() {
          var _this = this;

          var result = this._super.apply(this, arguments);
          var records = result;

          if (!Ember.isArray(result)) {
            records = [result];
          }

          forEach(records, function (record) {
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

    if (!DS.Model.prototype._emberfirePatched) {
      DS.Model.reopen({
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

    if (!DS.AdapterPopulatedRecordArray.prototype._emberfirePatched) {
      DS.AdapterPopulatedRecordArray.reopen({
        _emberfirePatched: true,
        willDestroy: function willDestroy() {
          if (this.__firebaseCleanup) {
            this.__firebaseCleanup();
          }
          return this._super();
        }
      });
    }

    DS.FirebaseAdapter = FirebaseAdapter;
    DS.FirebaseSerializer = FirebaseSerializer;
  }
};