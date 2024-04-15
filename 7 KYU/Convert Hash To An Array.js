function convertHashToArray(hash) {
  let arr = [];
  for (let [key, value] of Object.entries(hash)) {
    arr.push([key, value])
  }
  return arr.sort((a, b) => a[0].localeCompare(b[0]))
}
