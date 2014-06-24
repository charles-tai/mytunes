// SongQueue.js - Defines a backbone model class for the song queue.

var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function (song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.at(0).dequeue();
    });

    this.on('dequeue', function() {
      this.shift();

      if(this.length >= 1){
        this.playFirst();
      }
    });

    this.on('removeSong', function(song){
      this.remove(song);
    });
  },

  playFirst: function () {
    this.at(0).play();
  }
});
