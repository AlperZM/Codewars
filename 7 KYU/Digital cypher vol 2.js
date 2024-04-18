function decode(code, n) {
  let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  n = [...String(n)].map(Number);
  return code.map((m, i) => abc[m - (n[i % n.length]) - 1]).join("")
}
