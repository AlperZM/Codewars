function arbitrate(input, n) {
  return input.replace(/1/, "m").replace(/[^m]/gi, "0").replace(/[m]/gi, "1");
}
