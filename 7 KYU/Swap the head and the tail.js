function swapHeadAndTail(arr) {
  if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2).concat(arr.slice(0, arr.length / 2))
  } else {
    return arr.slice(arr.length / 2 + 1).concat(arr[Math.floor(arr.length / 2)], arr.slice(0, arr.length / 2))
  }
}
