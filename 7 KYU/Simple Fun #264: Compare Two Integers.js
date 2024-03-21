function compareIntegers(a, b) {
a = [...a]; b = [...b];

  if (a.length < b.length) return "less";
  if (a.length > b.length) return "greater";
  
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] < b[i]) return "less";
    if (b[i] < a[i]) return "greater";
  }
  return "equal";
}
