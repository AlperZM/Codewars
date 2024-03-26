function doubleEveryOther(a) {
  return a.map((m,i)=>i > 0 && i % 2 !== 0 ? m * 2 : m);
}
