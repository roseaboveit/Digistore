App.ItemRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("item")
  }
})