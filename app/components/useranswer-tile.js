import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  actions: {
    notesShow: function() {
      this.set('isNotesShowing', true);
    },
    notesHide: function() {
      this.set('isNotesShowing', false);
    },
  }
});
