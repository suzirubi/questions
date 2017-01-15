import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    save(question) {
      var params = {
        userquestion: this.get('userquestion'),
        author: this.get('author'),
        image: this.get('image'),
        notes: this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('save', question, params);
    },
    notesShow: function() {
      this.set('isNotesShowing', true);
    },
    notesHide: function() {
      this.set('editQuestionForm', false);
    }
  }
});
