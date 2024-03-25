function binaryCleaner(a) {
  let r = [[], []];
  a.map((x, i) => x < 2 ? r[0].push(x) : r[1].push(i));
  return r;
}
