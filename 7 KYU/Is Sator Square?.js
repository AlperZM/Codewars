function isSatorSquare(tablet) {
  let ar1 = [],
    ar2 = [];
  for (let i = 0; i < tablet.length; i++) {
    for (let j = 0; j < tablet.length; j++) {
      ar1.push(tablet[i][j]);
      ar2.push(tablet[j][i]);
    }
  }
  return ar1.join("") === ar1.reverse().join("") && ar1.reverse().join("") === ar2.join("") && ar2.reverse().join("") === ar2.join("");
}
