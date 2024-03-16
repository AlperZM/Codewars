function closingInSum(n) {
  let total = 0
  let arr = n.toString().split('')
  while (arr.length) {
    total += parseInt(`${arr.shift()}${arr.pop()}`)
  }
  return total
}
