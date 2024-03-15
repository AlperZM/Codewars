function createArrayOfTiers(num) {
  num = String(num);
  let arr = [];
  for (let i = 1; i <= num.length; i++) {
    arr.push(num.slice(0, i))
  }
  return arr
}
