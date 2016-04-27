
App.Views.Manager = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, "set");
    this.renderTemplate();
    return this;
  },

  renderTemplate: function() {
    var tmpl;
    tmpl = HandlebarsTemplates['post/index']();
    this.$el.html(tmpl);
    $('body').append(this.el);
  },

  set: function(view) {
    $('.main-content').html(view.render().el);
  }

});