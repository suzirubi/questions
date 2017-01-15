import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionForm: false,
  isNotesShowing: false,
  actions: {
    addQuestionShow() {
      this.set('addQuestionForm', true);
    },
    saveNew() {
      var params = {
        userquestion: this.get('userquestion') ? this.get('userquestion') : '',

        image: this.get('image') ? this.get('image') : '',

        author: this.get('author') ? this.get('author') : '',

        notes: this.get('notes') ? this.get('notes') : '',
      };
      this.set('addQuestionForm', false);
      this.sendAction('saveNew', params);
    },
    notesShow: function() {
      this.set('isNotesShowing', true);
    },
    notesHide: function() {
      this.set('addQuestionForm', false);
    }
  }
});
