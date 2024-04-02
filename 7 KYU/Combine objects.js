function combine(...args) {
  let obj = {};
  args.map(m => {
    for (let [key, value] of Object.entries(m)) {
      obj[key] = (obj[key] || 0) + value
    }
  });
  return obj
}
