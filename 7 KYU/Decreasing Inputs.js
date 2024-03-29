function add(...arr) {
  return Math.round(arr.map((m, i) => m / (i + 1)).reduce((a, b) => a + b, 0));
}
