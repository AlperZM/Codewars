function gimmeTheLetters(sp) {
  let start = sp.split("-")[0].charCodeAt();
  let final = sp.split("-")[1].charCodeAt();
  let arr = [];
  let diff = final - start;
  for(let i = 0; i <= diff; i++){
  arr.push(String.fromCharCode(start+i))
  }
  return arr.join("")
}
