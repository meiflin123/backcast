var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    var tempData = exampleVideoData;
    var videos = [];
    for (let i = 0; i < tempData.length; i++) {
      videos.push(new Video(tempData[i]));
    }
    this.render(); 
    this.videos = new Videos(videos);
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();
    // $('.video-list-entry-title').on('click', function(e){
    //   console.log(e);
    // });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  events : {
    'click .video-list-entry-title' : 'handleClick'
  },
  
  handleClick : function(e) {
    console.log($(e.target));
    debugger;
  },

  template: templateURL('src/templates/app.html')

});
