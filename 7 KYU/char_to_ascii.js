function charToAscii(string) {
  let obj = {};
  [...string.replace(/\s/g, "")].map(m => obj[m] = m.charCodeAt())
  return !string ? null : obj
}
