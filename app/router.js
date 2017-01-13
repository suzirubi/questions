import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('askquestion');
  this.route('answerquestion');
  this.route('question', {path: '/question/:question_id'});
});

export default Router;
