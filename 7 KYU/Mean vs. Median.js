function meanVsMedian(numbers) {
  let mean = numbers.reduce((a, b) => a + b) / numbers.length;
  let median = numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
  return mean === median ? 'same' : mean > median ? 'mean' : 'median'
}
