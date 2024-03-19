function olympicRing(a) {
  let rings1 = "qQeRoOpPaAdDgb";
  let medals = Math.floor([...a].map(m => rings1.includes(m) ? 1 : m === "B" ? 2 : 0)
  .reduce((x, y) => x + y, 0) / 2);
  return medals < 2 ? 'Not even a medal!' :
    medals === 2 ? 'Bronze!' : medals === 3 ? 'Silver!' : 'Gold!'
}
