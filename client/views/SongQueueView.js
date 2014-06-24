// SongQueueView.js - Defines a backbone view class for the song queue.
//
//when instantiated expects to be assigned SongQueue collection:
//var songQueue = new SongQueue([song1, song2])
//var songQueueView = new SongQueueView({ collection: })
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
