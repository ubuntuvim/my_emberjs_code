import Ember from 'ember';

export default Ember.Object.extend({
  /**
   * Extacts session information from authentication response
   * @param {object} authentication - hash containing response payload
   * @return {Promise}
   */
  open: function open(authentication) {
    return Ember.RSVP.resolve({
      provider: authentication.provider,
      uid: authentication.uid,
      currentUser: authentication[authentication.provider]
    });
  },
  /**
   * Restore existing authenticated session
   * @return {Promise}
   */
  fetch: function fetch() {
    var _this = this;

    var firebase = this.get('firebase');
    return new Ember.RSVP.Promise(function (resolve, reject) {
      var auth = firebase.getAuth();
      if (!auth) {
        reject("No session available");
      } else {
        resolve(_this.open(auth));
      }
    }, "Firebase Torii Adapter#fetch Firebase session");
  },
  /**
   * Close existing authenticated session
   * @return {Promise}
   */
  close: function close() {
    var firebase = this.get('firebase');
    firebase.unauth();
    return Ember.RSVP.resolve();
  }
});