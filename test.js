QUnit.config.reorder = false;

QUnit.test('Should exist', function (assert) {
  assert.strictEqual(typeof hanoi, 'object')
})

QUnit.test('Ensure the Hanoi is an Array', function (assert) {
  assert.strictEqual(Array.isArray(hanoi), true)
})

QUnit.test('Ensure the Hanoi PILE is an Array', function (assert) {
  hanoi.forEach(function (pile) {
    assert.strictEqual(Array.isArray(pile), true)
  })
});

QUnit.test('The length of the first pile is 5', function (assert) {
  assert.strictEqual(hanoi[0].length, 5);
});

QUnit.test('The length of the second pile is 0', function(assert) {
  assert.strictEqual(hanoi[1].length, 0);
});

QUnit.module('first move()', function() {

});

QUnit.test('A piece is removed from the source', function (assert) {
  move(0, 1);

  assert.strictEqual(hanoi[0].length, 4);
  assert.strictEqual(hanoi[1].length, 1);
});

QUnit.test('Target gets a new piece', function(assert) {
  assert.throws(function(){
    move(0, 1);
  });
});


