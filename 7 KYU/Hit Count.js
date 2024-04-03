function counterEffect(hitCount) {
  return Array.from({
    length: hitCount.length
  }, (e, i) => {
    let n = [...hitCount].map(Number);
    return Array.from({
      length: n[i] + 1
    }, (e, i) => i)
  })
}
