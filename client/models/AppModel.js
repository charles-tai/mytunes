// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    var songQueue = this.get('songQueue');

    // library event handlers
    params.library.on('enqueue', function(song) {
      songQueue.add(song);
      console.log('library enqueue, model"s collection');
      console.log(songQueue);
    });

    // songQueue event handlers
    songQueue.on('play', function(song){
      this.set('currentSong', song);
    },this);

    songQueue.on('stop', function(){
      this.set('currentSong', null);
      this.trigger('change:currentSong');
    }, this);
  }

});
