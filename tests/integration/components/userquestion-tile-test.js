import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('userquestion-tile', 'Integration | Component | userquestion tile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{userquestion-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#userquestion-tile}}
      template block text
    {{/userquestion-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
