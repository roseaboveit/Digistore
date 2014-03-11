App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  price: DS.attr("number")
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Civ V",
    avatar: "http://ts4.mm.bing.net/th?id=HN.608030763456531384&w=281&h=165&c=7&rs=1&pid=1.7",
    image: "http://ts4.mm.bing.net/th?id=HN.608030763456531384&w=281&h=165&c=7&rs=1&pid=1.7",
    description: "Sid Meier's Civilization V is a turn-based, 4X video game developed by Firaxis Games",
    price: 749
  },

  {
    id: 2,
    name: "Tropico",
    avatar: "http://ts4.mm.bing.net/th?id=HN.608022993854989466&w=153&h=177&c=7&rs=1&pid=1.7",
    image: "http://ts4.mm.bing.net/th?id=HN.608022993854989466&w=153&h=177&c=7&rs=1&pid=1.7",
    description: "Tropico is a series of construction and management simulation computer games developed by PopTop Software and published by Gathering of Developers",
    price: 1053
  }

]