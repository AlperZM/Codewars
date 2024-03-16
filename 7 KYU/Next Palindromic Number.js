function nextPal(val) {
  for (let i = val + 1; ; i++) {    
    if (String(i) === [...String(i)].reverse().join("")) return i
  }
}
