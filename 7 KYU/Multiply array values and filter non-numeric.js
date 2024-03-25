function multiplyAndFilter(array, multiplier) {
  return array.map((m, i, a) => typeof m === "number" ? m * multiplier : " ").filter(f => f !== " ")
}
