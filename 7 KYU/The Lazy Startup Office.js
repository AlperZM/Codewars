function binRota(arr) {
  return arr.map((m, i) => i % 2 !== 0 ? m.reverse() : m).flat()
}
