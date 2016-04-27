App.Views.Comment = Backbone.View.extend({

  initialize: function(options) {
    this.comment = options.comment
    return this;
  },

  render: function () {
    this.$el.html(HandlebarsTemplates['comment/show'](this.comment.toJSON()));
    return this;
  },

});