App.ApplicationRoute = Ember.Route.extend({

  beforeModel: function () {
    if (typeof(localStorage.cartId) === "undefined"){
      var cart = this.store.createRecord("cart")
      cart.save().then(
        function(cart){
          localStorage.cartId = cart.get("id")
          //success
        },
        function(error){
          //failure
        }

        );
      
    }
  },

  model: function(){
    return this.store.find("cart", localStorage.cartId)
  }
})