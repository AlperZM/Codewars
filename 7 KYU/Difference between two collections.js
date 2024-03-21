function diff(a, b) {
  return [...new Set(a.concat(b))].filter(f => !(a.includes(f) && b.includes(f))).sort()
}
