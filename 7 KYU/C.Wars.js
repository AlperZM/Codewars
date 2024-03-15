function initials(n) {
  return n.split(" ").map((m, i) => {
    return i != n.split(" ").length - 1 ? `${m[0].toUpperCase()}.` :
      `${m[0].toUpperCase()}${m.slice(1).toLowerCase()}`
  }).join("")
}
