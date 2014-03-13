// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize : function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log('SongQueueEntryView render:');
    console.log(this.model);
    return this.$el.html(this.template(this.model.attributes));
  }



});
