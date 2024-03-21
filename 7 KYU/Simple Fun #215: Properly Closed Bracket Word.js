function closedBracketWord(word) {
  let arr = word.split("").map(v => v.charCodeAt() - 96);
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] + arr[arr.length - 1 - i] !== 27) return false;
  }
  return true;
}
