
window.App = {

  Collections: {},
  Models: {},
  Views: {},

  Events: _.extend({}, Backbone.Events),

  initialize: function() {
    App.CurrentView = new App.Views.Manager();
    App.router = new App.Router();
    Backbone.history.start({pushState: true});
  }

};

$(function() {
  App.initialize();
});
