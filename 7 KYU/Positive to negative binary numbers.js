function positiveToNegative(b) {
  if (parseInt(b.join(""), 2) === 0) return b;
  return (parseInt(b.join("").replace(/[01]/gi, (e) => (e == 0 ? 1 : 0)), 2) + 1).toString(2).split("").map(Number)
}
