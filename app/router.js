import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home-profile');
  this.route('home_profile');
  this.route('foo');
});

export default Router;
