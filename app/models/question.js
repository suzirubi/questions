import DS from 'ember-data';

export default DS.Model.extend({
  userquestion: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
