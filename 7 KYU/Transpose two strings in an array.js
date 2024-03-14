function transposeTwoStrings(arr) {
  let res = [];
  let len = Math.max(arr[0].length, arr[1].length);

  for (let i = 0; i < len; i++) {
    result.push((arr[0][i] || " ") + " " + (arr[1][i] || " "));
  }

  return res.join("\n");
}
