function reverseMiddle(array) {
  let arr = [];
  if (array.length % 2 === 0) {
    arr.push(array[array.length / 2], array[array.length / 2 - 1])
  } else {
    let len = Math.floor(array.length / 2);
    arr.push([array[len - 1], array[len], array[len + 1]].reverse())
  }
  return arr.flat()
}
