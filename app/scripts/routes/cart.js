App.CartRoute = Ember.Route.extend({
  // actions: {
  //   seeCart: function(cart) {
  //     console.log("I have a cart")
  //   }
  // },
  model: function(){
    return this.store.find("cart", 1);
  },

  actions: {
    more: function (item) {
      item.incrementProperty('quantity');
    },
    less: function (item) {
      item.decrementProperty('quantity');   
    }
  }, 
});