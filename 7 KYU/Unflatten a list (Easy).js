function unflatten(flatArray) {
  return flatArray.reduce((a, b, i) => (a.push(b > 2 ? flatArray.splice(i, b, null) : b), a), [])
}
