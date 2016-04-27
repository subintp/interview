App.Views.PostList = Backbone.View.extend({

  tagName: 'ul',
  className: 'post-list',

  initialize: function() {
    _.bindAll(this, 'renderPosts', 'renderPost');
    this.setupPosts();
    return this;
  },

  setupPosts: function () {
    this.posts = new App.Collections.Posts();
    this.posts.on('sync', this.renderPosts);
    this.posts.fetch();
  },

  renderPosts: function () {
    return this.posts.each(this.renderPost);
  },

  renderPost: function (post) {
    var view = new App.Views.PostSummary({
      post: post
    });
    return this.$el.append(view.render().el);
  }

});