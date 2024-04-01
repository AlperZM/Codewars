function dominator(arr) {
  for (let i = 0, obj = {}; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
    if (obj[arr[i]] > arr.length / 2) return arr[i];
  }
  return -1;
}
