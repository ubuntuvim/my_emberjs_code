import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wrapping-content-in-component', 'Integration | Component | wrapping content in component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wrapping-content-in-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wrapping-content-in-component}}
      template block text
    {{/wrapping-content-in-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
