// app/routes/login.js

import Ember from 'ember';

export default Ember.Route.extend({
    //  清空提示信息
    setupController: function(controller, model) {
        console.log("route:login model = " + model);
        controller.set('errorMessage', null);
    }
});
