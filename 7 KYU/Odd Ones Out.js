function oddOnesOut(nums) {
  let obj = {}
  nums.map(m => obj[m] = (obj[m] || 0) + 1);
  for (let i in obj) {
    if (obj[i] % 2 !== 0) {
      nums = nums.filter(f => f !== (+i))
    }
  }
  return nums
}
