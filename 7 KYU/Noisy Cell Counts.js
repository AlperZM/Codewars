function cleanedCounts(data) {
  return data.map((m, i) => Math.max(...data.slice(0, i + 1)))
}
