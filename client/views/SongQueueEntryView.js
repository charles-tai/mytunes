// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr class ="songQueueEntry"',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize : function() {
    this.listenTo(this.model, 'add remove', this.render);
  },

  events: {
    'click td': function() {
      this.model.removeSong();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }



});
