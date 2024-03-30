function duplicates(arr) {
  let seen = new Set();
  let dups = [];
  for (let i of arr) {
    let types = typeof i;
    let unique = types + JSON.stringify(i);
    seen.has(unique) ? dups.push(i) : seen.add(unique);
  }
 return [...new Set(dups)]
}
