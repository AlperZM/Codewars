function paul(x) {
  let score = x.map(m => m === "kata" ? 5 : m === "Petes kata" ? 10 : m === "eating" ? 1 : 0).reduce((a, b) => a + b, 0)
  return score < 40 ? 'Super happy!' : score < 70 ? 'Happy!' : score < 100 ? 'Sad!' : 'Miserable!'
}
