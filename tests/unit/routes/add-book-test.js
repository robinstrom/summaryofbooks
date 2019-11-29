import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-book');
    assert.ok(route);
  });
});
