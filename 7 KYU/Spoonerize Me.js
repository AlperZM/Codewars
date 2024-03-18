function spoonerize(words) {
  return words.split(" ").map((m, i, a) => {
    return i === 0 ? a[a.length - 1][0] + a[0].slice(1) :
      i === a.length - 1 ? a[0][0] + a[i].slice(1) :
      m
  }).join(" ")
}
