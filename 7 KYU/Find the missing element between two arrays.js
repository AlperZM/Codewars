function findMissing(arr1, arr2) {
  arr1.map((m, i) => {
    if (arr2.find(f => f === m)) {
      arr1[i] = null;
      arr2[arr2.indexOf(m)] = null
    }
  })
  return arr1.filter(f => f !== null)[0]
}
