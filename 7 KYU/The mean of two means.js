function getMean(arr, x, y) {
  return x <= 1 || y <= 1 || x > arr.length || y > arr.length ? -1 :
    (arr.slice(0, x).reduce((pre, val) => pre + val) / x + arr.slice(-y).reduce((pre, val) => pre + val) / y) / 2;
}
