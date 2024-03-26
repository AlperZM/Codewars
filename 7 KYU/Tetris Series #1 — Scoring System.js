function getScore(arr) {
  let mult = 1;
  let lines = 0;
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] === 1) {
        score += 40 * mult;
      }
      if (arr[i] === 2) {
        score += 100 * mult;
      }
      if (arr[i] === 3) {
        score += 300 * mult;
      }
      if (arr[i] === 4) {
        score += 1200 * mult;
      }
      lines += arr[i];
      if (lines >= mult * 10) {
        mult += 1;
      }
    }
  }
  return score;
}
