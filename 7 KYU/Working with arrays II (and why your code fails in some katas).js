function removeNthElement(arr, n) {
  var arrCopy = arr.slice();
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}
