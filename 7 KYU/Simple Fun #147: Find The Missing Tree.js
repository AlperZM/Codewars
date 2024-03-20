function findTheMissingTree(trees) {
  //create an object from an array,
  let obj = trees.reduce((a, b) => (a[b] ? a[b]++ : a[b] = 1, a), {});
  
  return Number(Object.keys(obj).reduce((a, b) => obj[b] < obj[a] ? b : a));
}
