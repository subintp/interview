App.Collections.Posts = Backbone.Collection.extend({

  name: 'posts',
  model: App.Models.Post,
  url : "/posts"


});