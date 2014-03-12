App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  cart: DS.belongsTo("cart", {async: true}),
  product: DS.belongsTo("product", {async: true}),
  subtotal: DS.attr("number")
});

App.Item.FIXTURES = [
  {id: 1,
  cart: 1,
  product: 1,
  quantity: 1,
  subtotal: 749
  }  
]