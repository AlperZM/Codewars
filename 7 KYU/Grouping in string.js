const isConsecutive = (str) => {
  let arr = str.match(/(.)\1*/g);
  return arr.length == new Set(arr).size;
}
