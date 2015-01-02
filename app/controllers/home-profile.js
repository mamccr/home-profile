import Ember from 'ember';
import HomeProfile from '../models/home-profile';

export default Ember.Controller.extend({
  watchModel: function() {
    this.model.save();
  }.observes('model.autoSaveAttributes')
});
