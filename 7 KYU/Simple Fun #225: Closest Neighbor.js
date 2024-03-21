function closestNeighbor(n, a, b, c) {
  let below = 0,
    above = 0;
  for (let i = n; i > 0; i--) {
    if (i % a === 0 && i % b === 0 && i % c === 0) {
      below = i;
      break;
    }
  }
  for (let j = n; j < n * a * b * c; j++) {
    if (j % a === 0 && j % b === 0 && j % c === 0) {
      above = j;
      break;
    }
  }

  return [below, above]
}
