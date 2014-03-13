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
    console.log(this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    // console.log('song enqueued');
    // app.songQueue.add(this.model);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }
});
