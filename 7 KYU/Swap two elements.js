function swapTwo(array, a, b) {
  let first = array.indexOf(a);
  let last = array.lastIndexOf(b);
  array[first] = b;
  array[last] = a;
  return Array.from(array)
}
