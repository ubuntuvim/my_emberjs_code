import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('binding-element-attributes', 'Integration | Component | binding element attributes', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{binding-element-attributes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#binding-element-attributes}}
      template block text
    {{/binding-element-attributes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
