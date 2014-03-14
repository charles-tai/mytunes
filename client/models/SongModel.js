// SongModel.js - Defines a backbone model class for songs.
//
/*
attributes
artist: 'data',
url: '/test/testsong.mp3',
title:'test song'
*/
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // second 'this' is the object that triggered the event
    // needed because you want to know the object (maybe someone at the other end needs the object)
    // you're never certain that you won't need the object later
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    // console.log('song enqueued');
    // app.songQueue.add(this.model);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  removeSong: function(){
    this.trigger('removeSong', this);
    console.log(this.collection);
    console.log('Kitten removed');
  },

  ended: function(){
    console.log('songmodel ended- collection:');
    console.log(this.collection);
    this.trigger('ended', this);
  }
});
