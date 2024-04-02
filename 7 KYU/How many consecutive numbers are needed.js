function consecutive(arr) {
  let len = arr.length;
  return len ? Math.max(...arr) - Math.min(...arr) - len + 1 : 0;
}
