function getLosAngelesPoints(results) {
  return results.filter(f => f[0].match(/^Los Angeles [^\d]+$/))
    .map(m => m[1].split(":")[0] * 1).reduce((a, b) => a + b, 0)
}
