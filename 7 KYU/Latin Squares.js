function makeLatinSquare(n) {
  let arr = [];
  let temp = Array.from({
    length: n
  }, (n, i) => {
    return i + 1
  });

  for (let i = 0; i < n; i++) {
    let first = temp[0];
    temp = temp.slice(1)
    temp.push(first);
    arr.push(temp)
  }
  return arr;
}
