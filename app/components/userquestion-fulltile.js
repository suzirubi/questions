import Ember from 'ember';

export default Ember.Component.extend({

    // remove before turning in
    actions: {
      delete(question){
        if (confirm('Are your sure you want to delete this entry?')){
          this.sendAction('destroyQuestion', question);
        }
      }
    }
    //end remove
});
