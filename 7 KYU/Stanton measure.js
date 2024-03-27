function stantonMeasure(arr) {
  let num = arr.filter(f => f === 1).length
  return arr.filter(f => f === num).length
}
