function diff(str) {
  let arr = str.map(m => Math.abs(m.split("-")[0]-m.split("-")[1]));
  if (arr.every(e => e === 0)) return false;
  return str[arr.indexOf(Math.max(...arr))];
}
