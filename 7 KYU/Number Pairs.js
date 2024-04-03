function getLargerNumbers(a, b) {
  return a.map((m,i)=> m > b[i] ? m : b[i])
}
