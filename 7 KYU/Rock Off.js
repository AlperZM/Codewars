function solve(a, b) {
  let aPoints = 0;
  let bPoints = 0;
  a.map((m, i) => m > b[i] ? aPoints++ : m < b[i] ? bPoints++ : 0)

  if (aPoints > bPoints) {
    return `${aPoints}, ${bPoints}: Alice made "Kurt" proud!`
  } else if (aPoints < bPoints) {
    return `${aPoints}, ${bPoints}: Bob made "Jeff" proud!`
  } else {
    return `${aPoints}, ${bPoints}: that looks like a "draw"! Rock on!`
  }
}
