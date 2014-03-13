// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    var playerView = this;
    this.el.addEventListener('ended', function() {
      playerView.model.ended();
    },this);
  },

  setSong: function(song){
    this.model = song;
    console.log('playerView');
    console.log(this.model);
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
