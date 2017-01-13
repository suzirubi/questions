import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('userquestion-fulltile', 'Integration | Component | userquestion fulltile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{userquestion-fulltile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#userquestion-fulltile}}
      template block text
    {{/userquestion-fulltile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
