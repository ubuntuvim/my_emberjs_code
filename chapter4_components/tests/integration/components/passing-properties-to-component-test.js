import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('passing-properties-to-component', 'Integration | Component | passing properties to component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{passing-properties-to-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#passing-properties-to-component}}
      template block text
    {{/passing-properties-to-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
