var hanoi = [
  [10, 20, 30, 40, 50],
  [],
  []
];

function move (source, target) {
  var value = hanoi[source].shift();
  console.log(target.slice(), source.slice())
  if (value != null && target[0] < value) {
    throw new RangeError;
  }
  hanoi[target].unshift(value);
}


