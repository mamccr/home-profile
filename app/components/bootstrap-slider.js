import Ember from 'ember';

export default Ember.Component.extend({

  attributeBindings: ['type', 'data-slider-min', 'data-slider-max', 'data-slider-step', 'data-slider-tooltip',
    'data-slider-selection'],

  tagName: 'input',

  type: Ember.computed.oneWay('type'),
  'data-slider-min': Ember.computed.oneWay('min'),
  'data-slider-max': Ember.computed.oneWay('max'),
  'data-slider-step': Ember.computed.oneWay('step'),
  'data-slider-tooltip': Ember.computed.oneWay('tooltip'),
  'data-slider-selection': Ember.computed.oneWay('selection'),

  didInsertElement: function(){
    this.$().slider({
      formatter: this.get('formatter')
    });
  },

  actions: {
    slideStop: function(value) {
      console.log("SliderComponent slideStop %d", value);
      this.sendAction('sliderDidChange', value);
    }
  }
});
