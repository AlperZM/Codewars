function secondSymbol(s, symbol) {
  return [...s].map((m, i) => m === symbol ? i : "")
    .filter(f => typeof f === "number")[1] || -1
}
