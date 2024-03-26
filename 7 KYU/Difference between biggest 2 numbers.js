function diffBig2(arr) {
  let n = Math.max(...arr);
  arr.splice(arr.indexOf(n), 1);
  return n - Math.max(...arr);
}
