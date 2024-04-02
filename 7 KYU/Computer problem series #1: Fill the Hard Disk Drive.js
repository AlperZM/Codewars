function save(sizes, hd) {
  let i = -1;
  while (hd >=0) {
    hd -= sizes.shift();
    i++;
  }
  return i;
}
