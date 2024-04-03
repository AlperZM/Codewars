const sumAverage = (arr) => {
  return Math.floor(arr.map(m => m.reduce((a, b) => a + b, 0) / m.length)
    .reduce((a, b) => a + b, 0))
}
