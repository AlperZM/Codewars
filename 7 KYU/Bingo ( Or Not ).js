function bingo(a) {
  let arr = a.map(m => String.fromCharCode(m + 64))

  return ["B", "I", "N", "G", "O"].every(e => arr.includes(e)) ? "WIN" : "LOSE"
}
