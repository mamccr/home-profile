import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',

  ajax: function(url, method, hash) {
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  },

  pathForType: function(type) {
    if (type === 'homeProfile') {
      return 'home_profile';
    }
    return DS.ActiveModelAdapter.prototype.pathForType.call(this, type);
  }

});
