var isSquare = function(arr) {
  return arr.length === 0 ? undefined : arr.every(e => Number.isInteger(Math.sqrt(e)))
}
