var VideoListView = Backbone.View.extend({
  
  //this.collection
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVidEntry, this);
    return this;
  },

  renderVidEntry: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
