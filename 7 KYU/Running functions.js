function running(lst, fn) {
  return lst.map((v, i) => lst.slice(0, i + 1).reduce((a, b) => fn(a, b)));
}
