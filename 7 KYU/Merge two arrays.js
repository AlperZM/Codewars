function mergeArrays(a, b) {
  let len = Math.max(a.length, b.length);
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(a[i] || "delete");
    arr.push(b[i] || "delete")
  }
  return arr.filter(f => f !== "delete")
}
