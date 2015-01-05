import Ember from 'ember';

export default Ember.Select.extend({
  content: Ember.computed(function() {
    var localizationObject = I18n.t(this.get('translationKey'));
    return Object.keys(localizationObject).map(function(k){return localizationObject[k];});
  })
});
