var rotateMatrix = arr => {
  return arr[0].map((_, i) => arr.map(m => m[i])).reverse();
}
