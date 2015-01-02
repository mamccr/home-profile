import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('homeProfile').then(function(array) {
      return array.get('firstObject');
    });
  }
});
