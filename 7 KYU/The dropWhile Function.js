function dropWhile(arr, pred) {
  let res = Array.from(arr)
  while (res.length && pred(res[0])) res.shift();
  return res;
}
