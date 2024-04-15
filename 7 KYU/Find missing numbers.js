function findMissingNumbers(arr) {
  let res = [];
  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    if (arr.indexOf(i) == -1) res.push(i)
  }
  return res
}
