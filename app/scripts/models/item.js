App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  cart: DS.belongsTo("cart"),
  product: DS.belongsTo("product"),
  price: DS.attr("number"),
  subtotal: function(){
    return this.get('quantity') * this.get('price')
  }.property("quantity", "price"),
  dollars: function(subtotal){
          return "$" + this.get("subtotal")/100;
     }.property("price", "quantity")
})
