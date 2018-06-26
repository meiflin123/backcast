var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVidEntry, this);
    return this;
  },

  renderVidEntry: function(videoEntryView) {
    var videoView = new videoListEntryView({view: videoEntryView});
    this.$el.append(videoView.render());
  }

  template: templateURL('src/templates/videoList.html')

});
