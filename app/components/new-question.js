import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNew(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
