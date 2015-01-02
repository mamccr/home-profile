import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'label',
  attributeBindings: ['for'],
  for: Ember.computed.oneWay('target')
});
