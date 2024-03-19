function seaSick(x) {
  let count = 0;
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] !== x[i + 1]) count++;
  }
  return count > x.length * 0.20 ? "Throw Up" : "No Problem";
}
