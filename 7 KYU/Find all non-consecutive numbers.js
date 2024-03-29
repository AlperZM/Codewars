function allNonConsecutive(arr) {
  let res = [];
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j + 1] - arr[j] !== 1) {
      res.push({
        i: j + 1,
        n: arr[j + 1]
      })
    }
  }
  return res
}
