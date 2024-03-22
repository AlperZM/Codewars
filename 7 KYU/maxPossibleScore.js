function maxPossibleScore(obj, arr) {
return [...Object.keys(obj), ...arr].reduce((a, b) => a + (obj[b] || 0), 0);
}
