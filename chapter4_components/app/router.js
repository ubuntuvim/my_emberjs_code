import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('passing-properties-to-component');
  this.route('wrapping-content-in-component-route');
  this.route('customizing-component-element');
  this.route('home');
  this.route('about');
  this.route('component-route');
  this.route('button-with-confirmation-route');
});

export default Router;
