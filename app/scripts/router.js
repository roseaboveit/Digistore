App.Router.map(function(){
  this.route("products", { path: "/" })
  this.resource("products", function() {
    this.resource("product", { path: ":product_id" })
  })
  this.resource("cart", function(){
    this.resource("checkout")
  })
  this.resource("item")

});