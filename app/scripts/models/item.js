App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  cart: DS.belongsTo("cart", {async: true}),
  product: DS.belongsTo("product", {async: true})
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    cart: 1,
    quantity: 3
  },
  {
    id: 2,
    product: 2,
    cart: 1,
    quantity: 1
  }
]