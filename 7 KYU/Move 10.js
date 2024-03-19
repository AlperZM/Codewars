function moveTen(s) {
  return [...s].map(e => {
    let index = e.charCodeAt(0);
    return e.charCodeAt(0) + 10 > 122 ?
      String.fromCharCode(index - 16) :
      String.fromCharCode(index + 10)
  }).join('');
}
