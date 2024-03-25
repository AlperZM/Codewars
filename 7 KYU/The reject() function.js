function reject(array, predicate) {
  return array.filter(f => !predicate(f))
}
