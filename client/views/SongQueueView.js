// SongQueueView.js - Defines a backbone view class for the song queue.
//
//when instantiated expects to be assigned SongQueue collection:
//var songQueue = new SongQueue([song1, song2])
//var songQueueView = new SongQueueView({ collection: })
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
    console.log('collection:');
    console.log(this.collection);
    console.log('model');
    console.log(this.model);
  },

  // events: {

  // },


  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    console.log('render');
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
