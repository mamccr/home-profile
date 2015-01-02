import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(property, options) {
  var params = {};
  if (typeof(options) != "undefined") {
    params = options.hash;
  }

  // // Support variable interpolation for our string
  // Object.keys(params).forEach(function (key) {
  //   params[key] = Ember.Handlebars.get(self, params[key], options);
  // });

  return I18n.t(property, params);
});
