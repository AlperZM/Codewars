function to1D(x, y, [w,h]) {
  return y * w + x;
}

function to2D(n, [w,h]) {
  return [n%w, n/w|0];
}
