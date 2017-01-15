import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  model(params) {
    return Ember.RSVP.hash({
    questions: this.store.findRecord('question', params.question_id),
    answers: this.store.findRecord('answer', params.answer_id)
  });
},
  actions: {
    notesShow: function() {
      this.set('isNotesShowing', true);
    },
    notesHide: function() {
      this.set('isNotesShowing', false);
    },
  }
});
