function isValidChess960(pieces) {
  let b1 = pieces.indexOf("B"),
    b2 = pieces.lastIndexOf("B");
  let r1 = pieces.indexOf("R"),
    r2 = pieces.lastIndexOf("R");
  let k = pieces.indexOf("K");
  return b1 % 2 !== b2 % 2 && k > r1 && k < r2
}
