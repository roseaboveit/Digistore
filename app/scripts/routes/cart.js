App.CartRoute = Ember.Route.extend({

  model: function(){
    return this.modelFor('application');
  },

  actions: {
    more: function (item) {
      item.incrementProperty('quantity');
    },
    less: function (item) {
      item.decrementProperty('quantity');   
    }
  } 
});