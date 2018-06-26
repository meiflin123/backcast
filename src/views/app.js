var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    debugger;
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView({ collection: this.videos});
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
