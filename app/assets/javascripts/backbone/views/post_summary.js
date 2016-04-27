App.Views.PostSummary = Backbone.View.extend({

  tagName: 'li',
  className: 'post-summary',

  events: {
    'click': 'showPost'
  },

  initialize: function(options) {
    _.bindAll(this, 'showPost');
    this.post = options.post
    return this;
  },

  render: function () {
    this.$el.html(HandlebarsTemplates['post/summary'](this.post.toJSON()));
    return this;
  },

  showPost: function () {
    App.router.navigate('/posts/'+this.post.id, { trigger:true } );
  }

});