// app/components/get-quotes.js

import Ember from 'ember';

export default Ember.Component.extend({
    gotQuote: false,
    quote: "",

    actions: {
        getQuote: function() {
            var that = this;
            //  返回一个随机的字符串
            Ember.$.ajax({
                type: 'GET',
                // url: 'http://localhost:3001/api/protected/random-quote',
                url: 'http://localhost:3001/api/random-quote',
                success: function(response) {
                    that.setProperties({ quote: response, gotQuote: true });
                },
                error: function(error) {
                    alert("An error occurred while processing the response.");
                    console.log(error);
                }
            });
        }
    }
});
