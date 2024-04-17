function squareUp(n) {
  let arr = [];
  let temp = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    temp[i] = i + 1;
    arr.push([...temp].reverse())
  }
  return arr.flat()
}
