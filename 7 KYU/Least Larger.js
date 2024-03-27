function leastLarger(a, i) {
  let arr = a.filter((f) => f > a[i]).sort((a, b) => a - b);
  return a.lastIndexOf(arr[0]);
}
