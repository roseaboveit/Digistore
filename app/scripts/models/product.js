App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  price: DS.attr("number"),
  dollars: function(price){
          return "$" + this.get("price")/100;
     }.property("price")
});
