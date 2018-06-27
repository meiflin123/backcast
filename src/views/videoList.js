var VideoListView = Backbone.View.extend({
  
  el : '.list',
  
  //this.collection
  initialize: function() {
    this.collection.on('sync', this.render, this);
    //this.render();
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVidEntry, this);
    //$('.col-md-5').append(this.$el);
    return this.$el;
  },

  renderVidEntry: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
