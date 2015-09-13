// app/controllers/application.js

import Ember from 'ember';

/**
 * Ember会根据命名规则自动找到templates/application.hbs这个模板，
 * @type {hash} 需要设置的hash对象
 */
export default Ember.Controller.extend({
	//  设置属性
	firstName: 'chen',
	lastName: 'ubuntuvim',
	email: 'chendequanroob@gmail.com'
});