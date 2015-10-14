//  app/components/link-items.js

import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href'],
	href: 'http://www.google.com.hk'
});