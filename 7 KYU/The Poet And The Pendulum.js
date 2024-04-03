function pendulum(values) {
  let left = [],
    right = [];
  let sorted = values.sort((a, b) => a - b)
    .map((m, i) => i % 2 === 0 ? left.push(m) : right.push(m));
  return left.reverse().concat(right);
}
