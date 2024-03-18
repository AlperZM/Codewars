function doubles(s) {
  let arr = [];
  for (let i of s) {
    arr.length != 0 && arr[arr.length - 1] == i ? arr.pop() : arr.push(i)
  }
  return arr.join("")
}
