App.Collections.Comments = Backbone.Collection.extend({

  name: 'comments',
  model: App.Models.Comment,

  initialize: function(options) {
    this.postId = options.post_id;
  },

  url: function() {
    return "/comments/?post_id="+this.postId;
  }


});