const xMarksTheSpot = (input) => {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x" && res) {
        res.push(i, j)
      }
    }
  }
  return res.length > 2 ? [] : res
}
