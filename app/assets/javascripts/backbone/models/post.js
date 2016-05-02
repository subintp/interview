App.Models.Post = Backbone.Model.extend({

  name: 'post',
  urlRoot : "/posts",

  vote: function () {
    $.ajax({
      type: "POST",
      url: "/posts/"+this.id+"/vote",
      success: function () {
        console.log('Voted!');
      }
    });
  }

});