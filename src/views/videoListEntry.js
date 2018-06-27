var VideoListEntryView = Backbone.View.extend({

  initialize : function() {
    
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  // events : {
  //   'click .video-list-entry-title' : 'modelSelect'
  // },
  
  // modelSelect : function() {
  //   this.model.select();
  // },
  
  template: templateURL('src/templates/videoListEntry.html')

});
