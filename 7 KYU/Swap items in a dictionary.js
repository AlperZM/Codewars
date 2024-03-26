function switchDict(dic) {
  return Object.entries(dic).reduce((a, [key, value]) => (a[value] = [...a[value] || [], key], a), {})
}
