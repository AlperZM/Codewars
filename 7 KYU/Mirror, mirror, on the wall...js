function mirror(data) {
  let first = data.slice().sort((a, b) => a - b)
  let second = data.slice().sort((a, b) => b - a).slice(1)
  return [...first, ...second]
}
