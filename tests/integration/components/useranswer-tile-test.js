import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('useranswer-tile', 'Integration | Component | useranswer tile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{useranswer-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#useranswer-tile}}
      template block text
    {{/useranswer-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
