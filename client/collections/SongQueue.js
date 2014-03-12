// SongQueue.js - Defines a backbone model class for the song queue.
//
/*
songData1 = {
  artist: 'data',
  url: '/test/testsong.mp3',
  title:'test song'
};
songData2 = {
  artist: 'data',
  url: '/test/testsong2.mp3',
  title:'test song 2'
};

//methods
add - should call playFirst if no songs in queue
playFirst - play first song in queue (queue[0])
when song.ended
 - queue.shift();
 - if no more songs, do nothing
 - else play queue[0]

 if song.play is called
 - queue.playFirst

 if song[1].dequeue
 - queue.remove(song[1])
 */
var SongQueue = Songs.extend({

  initialize: function(){
  }

});
