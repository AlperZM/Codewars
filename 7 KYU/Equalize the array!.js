function equalize(array) {
  return array.map((m, i, a) => m - a[0] >= 0 ? "+" + (m - a[0]) : "" + (m - a[0]))
}
