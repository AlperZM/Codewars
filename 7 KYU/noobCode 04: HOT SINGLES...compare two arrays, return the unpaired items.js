function hotSingles(arr1, arr2) {
  let a = arr1.filter(f => !arr2.includes(f));
  let b = arr2.filter(f => !arr1.includes(f));
  return [...new Set([...a, ...b])];
}
