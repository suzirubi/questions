import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  useranswer: DS.attr(),
  notes: DS.attr()
});
