function solve(arr) {
  let xs = arr.map(x => x.split(" on ")[0]);
  let ys = arr.map(x => x.split(" on ")[1]);
  xs = xs.map(x => ({ "Left" : "Right", "Right" : "Left" }[x] || x));
  xs.push(xs.shift());
  return xs.map((x, i) => `${x} on ${ys[i]}`).reverse();
}
