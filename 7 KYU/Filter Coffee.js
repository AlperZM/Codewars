function search(budget, prices) {
  return prices.filter(f => f <= budget).sort((a, b) => a - b).join(",")
}
