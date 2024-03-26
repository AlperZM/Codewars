function scoreTest(str, right, omit, wrong) {
  return str.reduce((a, b) => a + (b == 0 ? right : b == 1 ? omit : wrong*(-1)),0)
}
