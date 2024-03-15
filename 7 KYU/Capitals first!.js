function capitalsFirst(str) {
  let big = [];
  let small = [];
  str.split(" ").map(m => (m[0] === m[0].toUpperCase() ? big.push(m) : small.push(m)));
  return big.filter(f => f[0].match(/[A-Z]/))
    .concat(small.filter(f => f[0].match(/[a-z]/)))
    .join(" ");
}
