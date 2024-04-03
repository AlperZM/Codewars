function filterHomogenous(arrays) {
  return arrays.filter(f =>
    f.every((v, i, a) => typeof v === typeof a[0])
  ).filter(f => f.length !== 0);
}
