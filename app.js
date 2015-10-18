var hanoi = [
  [10, 20, 30, 40, 50],
  [],
  []
];

function move (source, target) {
  var newTopBlock = hanoi[source][0];
  var oldTopBlock = hanoi[target].slice(-1)[0] || Infinity;
  if (newTopBlock > oldTopBlock) {
    throw new RangeError('No disk may be placed on top of a smaller disk.');
  }
  hanoi[source].shift();
  hanoi[target].unshift(newTopBlock);
}
