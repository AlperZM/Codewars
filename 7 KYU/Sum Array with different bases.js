function sumItUp(n) {
  return n.reduce((a, b) => a + parseInt(b[0], b[1]), 0);
}
