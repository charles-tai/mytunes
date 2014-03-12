// SongModel.js - Defines a backbone model class for songs.
//
/*
    //attributes
      artist: 'data',
     url: '/test/testsong.mp3',
      title:'test song'

      //methods
      play
      dequeue
      enqueue
      ended
      */
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
