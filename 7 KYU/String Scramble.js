function scramble(str, arr) {
let res = [];
  for(let i = 0; i < arr.length; i++) res[arr[i]] = str[i];
  return res.join("");
}
