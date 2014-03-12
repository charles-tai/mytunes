// SongQueueView.js - Defines a backbone view class for the song queue.
//
//when instantiated expects to be assigned SongQueue collection:
//var songQueue = new SongQueue([song1, song2])
//var songQueueView = new SongQueueView({ collection: })
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  },

  // events: {'change', this.collection, render}

  render: function() {
    return this.$el;
  }

});
