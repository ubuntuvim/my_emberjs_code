//  app/serializers/application.js

import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	serialize: function(snapshot, options) {
		var json = this._super(...arguments);  // ??
		json.data.attributes.cost = {
			amount: json.data.attributes.amount,
			currency: json.data.attributes.currency
		};

		delete json.data.attributes.amount;
		delete json.data.attributes.currency;

		return json;
	}，

	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		payload.data.attributes.amount = payload.data.attributes.cost.amount;
		payload.data.attributes.currency = payload.data.attributes.cost.currency;

		delete payload.data.attributes.cost;

		return this._super(...arguments);
	}
	,
	primatyKey: '__id'
});
