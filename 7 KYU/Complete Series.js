function completeSeries(arr) {
  arr = arr.sort((a, b) => a - b);
  if (arr.some(s => arr.lastIndexOf(s) !== arr.indexOf(s))) return [0];
  let res = [];
  for (let i = 0; i <= Math.max(...arr); i++) {
    res.push(i)
  }
  return res
}
