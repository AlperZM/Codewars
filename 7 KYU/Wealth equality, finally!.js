function redistributeWealth(wealth) {
  let equal = wealth.reduce((a, b) => a + b, 0) / wealth.length;
  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = equal
  }
}
