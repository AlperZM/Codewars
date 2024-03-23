function getElement(array, indexes) {
  let res;
  for(let i = 0; i < indexes.length; i++) {
    array = array.slice()[indexes[i]];
    res = array;
  }
  return res;
}
