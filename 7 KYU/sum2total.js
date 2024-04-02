function total(arr) {
  while (arr.length > 2) {
    arr = arr
      .map((m, i, a) => (m = a[i] + a[i + 1]))
      .filter(f => !isNaN(f));
  }
  return arr.reduce((a, b) => a + b, 0);
}
