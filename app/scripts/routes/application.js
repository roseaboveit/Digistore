App.ApplicationRoute = Ember.Route.extend({

  beforeModel: function () {
    
  },

  model: function(){
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

    return this.store.find("cart", localStorage.cartId)
  }
})