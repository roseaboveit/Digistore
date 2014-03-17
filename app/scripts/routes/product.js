App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("product", params.product_id)
  },

  actions: {
    addToCart: function(product){
      var store = this.store;
      // var cart = store.find("cart", localStorage.cartId)
      this.store.find("cart", localStorage.cartId).then( function (cart){
        var item = store.createRecord("item",{
          cart: cart,
          product: product,
          quantity: 1,
          price: product.get("price")
        })
        cart.get("items").then( function(items){
          debugger;
          items.pushObject(item)
        })
        item.save();
      })
      this.transitionTo("cart");
    }
  }
})