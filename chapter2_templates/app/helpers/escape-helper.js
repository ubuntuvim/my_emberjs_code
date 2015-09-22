// app/helpers/escape-helper.js

import Ember from 'ember';

export function escapeHelper(params/*, hash*/) {
  // return Ember.String.htmlSafe(`<b>${params}</b>`);
  return `<b>${params}</b>`;
}

export default Ember.Helper.helper(escapeHelper);
