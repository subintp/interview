App.Views.PostSummary = Backbone.View.extend({

  tagName: 'li',

  events: {
    'click .post-summary': 'showPost',
    'click .post-vote-btn': 'voteForPost',
  },

  initialize: function(options) {
    _.bindAll(this, 'showPost', 'voteForPost', 'incrementVoteCount');
    this.post = options.post;
    this.on('voted', this.incrementVoteCount)
    return this;
  },

  render: function () {
    this.$el.html(HandlebarsTemplates['post/summary'](this.post.toJSON()));
    return this;
  },

  showPost: function () {
    App.router.navigate('/posts/'+this.post.id, { trigger:true } );
  },

  voteForPost: function (ev) {
    ev.preventDefault();
    this.post.vote();
    this.trigger('voted');
  },

  incrementVoteCount: function () {
    var countContainer = ".post-"+this.post.id+"-count"
    $(countContainer).text(parseInt($(countContainer).text())+1);
  }

});