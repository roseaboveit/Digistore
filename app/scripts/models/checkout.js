App.Checkout = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  creditcard: DS.attr("number"),
  cvv: DS.attr("number"),
  zipcode: DS.attr("number"),
  expiration: DS.attr("date")
});
