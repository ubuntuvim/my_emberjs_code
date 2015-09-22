import Ember from 'ember';

export function formatDateyyyyMmDd(params, hash) {
	console.log('params=' + params);
	console.log('hash.format = ' + hash.format);  //
	console.log('------------------------------------');
	return params;
}

export default Ember.Helper.helper(formatDateyyyyMmDd);
