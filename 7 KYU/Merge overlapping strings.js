function mergeStrings(s1, s2) {
  let merge = 0;
  for (let i = 1; i <= Math.min(s1.length, s2.length); i++) {
    if (s1.slice(-i) === s2.slice(0, i)) merge = i;
  }
  return s1 + s2.slice(merge);
}
