function spinAround(turns) {
  let spin = turns.map(m => m === "right" ? 90 : -90).reduce((a, b) => a + b, 0) / 360
  return spin < 0 && spin > -1 ? 0 : Math.floor(Math.abs(spin))
}
