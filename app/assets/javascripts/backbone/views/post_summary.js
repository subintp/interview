App.Views.PostSummary = Backbone.View.extend({

  tagName: 'li',

  events: {
    'click .post-summary': 'showPost',
    'click .post-vote-btn': 'voteForPost'
  },

  initialize: function(options) {
    _.bindAll(this, 'showPost', 'voteForPost');
    this.post = options.post
    return this;
  },

  render: function () {
    this.$el.html(HandlebarsTemplates['post/summary'](this.post.toJSON()));
    return this;
  },

  showPost: function () {
    console.log('Inside show post');
    App.router.navigate('/posts/'+this.post.id, { trigger:true } );
  },

  voteForPost: function (ev) {
    ev.preventDefault();
    this.post.vote();
    console.log('vote fn is working');
  }

});