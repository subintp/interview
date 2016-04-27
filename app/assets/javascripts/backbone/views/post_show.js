App.Views.Post = Backbone.View.extend({

  initialize: function(options) {
    _.bindAll(this, 'renderComments', 'renderComment');
    this.post = options.post
    this.render();
    this.setupComments();
    return this;
  },

  setupComments: function () {
    this.comments = new App.Collections.Comments({post_id: this.post.id});
    this.comments.on('sync', this.renderComments);
    this.comments.fetch();
  },

  render: function () {
    this.$el.html(HandlebarsTemplates['post/show'](this.post.toJSON()));
    return this;
  },

  renderComments: function () {
    return this.comments.each(this.renderComment);
  },

  renderComment: function (comment) {
    var view = new App.Views.Comment({
      comment: comment
    });
    return this.$el.append(view.render().el);
  }

});