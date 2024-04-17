function orArrays(arr1, arr2, or = 0) {
  let a = [...arr1, ...Array(Math.max(arr2.length - arr1.length, 0)).fill(or)];
  let b = [...arr2, ...Array(Math.max(arr1.length - arr2.length, 0)).fill(or)];
  return a.map((a, i) => a | b[i]);
}
