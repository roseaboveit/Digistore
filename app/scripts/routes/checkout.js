App.CheckoutRoute = Ember.Route.extend({
  model: function(){
    return this.store.find("checkout");
  },

  actions: {
    goToCheckout: function(cart){
      var store = this.store;
      this.store.find("cart", localStorage.cartId).then( function (cart){

        this.transitionTo("checkout");
      }
    }
  });