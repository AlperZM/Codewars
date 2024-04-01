function solve(arr) {
  return arr.map((m, i, a) => {
    if (!a.includes(m) || !a.includes(-m)) return m
  }).filter(f => Number.parseInt(f))[0]
}
