function getWeight(name) {
  return [...name].reduce((a, v) => a + (/[a-z]/.test(v) ? v.charCodeAt() - 32 :
/[A-Z]/.test(v) ? v.charCodeAt() + 32 : 0), 0);
}
