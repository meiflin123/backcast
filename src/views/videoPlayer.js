var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize : function() {
    this.collection.on('select', this.render, this);
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    var playUrl = '"https://www.youtube.com/embed/iRXJXaLV0n4"';
    var iframe = `<iframe class="embed-responsive-item" src= ${playUrl} allowFullScreen></iframe>`;
    this.$el.find('.embed-responsive').append(iframe);
    
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')
  
});
