import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,
  actions: {
    addAnswerShow() {
      this.set('addAnswerForm', true);
    },
    saveNewAnswer() {
      var params = {
        useranswer: this.get('useranswer') ? this.get('useranswer') : '',

        image: this.get('image') ? this.get('image') : '',

        author: this.get('author') ? this.get('author') : '',

        notes: this.get('notes') ? this.get('notes') : '',

        question: this.get('question') ? this.get('question') : ''
      };
      this.set('addAnswerForm', false);
      this.sendAction('saveNewAnswer', params);
    },
    notesShow: function() {
      this.set('isNotesShowing', true);
    },
    notesHide: function() {
      this.set('addAnswerForm', false);
    }
  }
});
