function consecutiveOnes(nums) {
  let max = 0,cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) cur++;
    else {
      max = Math.max(max, cur);
      cur = 0;
    }
  }
  return Math.max(max, cur);
}
