App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  cart: DS.belongsTo("cart"),
  product: DS.belongsTo("product"),
  price: DS.attr("number"),
  subtotal: function(){
    return this.get('quantity') * this.get('price')
  }.property("quantity", "price")
})

App.Item.FIXTURES = [
  {id: 1,
  quantity: 1,
  cart: 1,
  product: 1,
  price: 749,
  subtotal: 749
  }  
]