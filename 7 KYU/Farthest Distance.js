function furthestDistance(arr) {
  let m = 0;
  for (var [x1, y1] of arr)
    for (var [x2, y2] of arr)
      m = Math.max(m, Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2)));

  return +m.toFixed(2);
}
