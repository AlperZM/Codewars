function cake(x, y) {
  y = [...y].map((m, i) => i % 2 === 0 ? m.charCodeAt() : m.charCodeAt() - 96).reduce((a, b) => a + b, 0);

  return x * 0.7 < y ? "Fire!" : 'That was close!'
}
