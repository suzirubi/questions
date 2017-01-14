import Ember from 'ember';


export default Ember.Route.extend({
  model() {
return this.store.findAll('question');
},
  actions: {
    saveNew(params){
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('askquestion');
      NewQuestion = Ember.Object.extend({
        init() {
          this.set('userquestion', 'image', 'author', 'notes');
        },
        newQuestionDisplay: Ember.on('init', Ember.observer('userquestion', 'image', 'author', 'notes'))
      });
    }
  }
});
