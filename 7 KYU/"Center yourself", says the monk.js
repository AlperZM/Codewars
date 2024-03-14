function center (strng, width, fill = ' ') {
  if (strng.length >= width) return strng;
  let r = fill.repeat(Math.floor((width - strng.length) / 2));
  let l = fill.repeat(Math.ceil((width - strng.length) / 2));
  return l + strng + r;
}
