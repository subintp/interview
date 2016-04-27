App.Router = Backbone.Router.extend({
  routes: {
    "": "postList",
    "posts/:post_id": "postView"
  },

  postList: function() {
    this.postList = new App.Views.PostList();
    App.CurrentView.set(this.postList);
  },

  postView: function(post_id) {
    var post = new App.Models.Post({id: post_id});
    post.fetch({
      success: function () {
        this.postView = new App.Views.Post({post: post});
        App.CurrentView.set(this.postView);
      }
    });
  }
});
