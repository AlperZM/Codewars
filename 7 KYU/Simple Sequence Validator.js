function validateSequence(x) {
  return x.map((e, i, a) => Math.abs(e - a[i + 1]) === Math.abs(a[0] - a[1])).slice(0, x.length - 1).every(e => e === true)
}
