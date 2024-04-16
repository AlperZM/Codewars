var calc = function(a) {
  return a
    .map((v, i) => (v > 0 ? v * v : v))
    .map((v, i) => {
      if ((i + 1) % 3 === 0) return v * 3;
      return v;
    })
    .map((v, i) => {
      if ((i + 1) % 5 === 0) return v * -1;
      return v;
    })
    .reduce((a, b) => a + b, 0);
};
