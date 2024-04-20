function axisAlignedBoundingBox(x, y) {
  if (x.length < 2 || x.length !== y.length) {
    throw new Error("Invalid input: x and y arrays must have at least 2 elements and equal length");
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < x.length; i++) {
    minX = Math.min(minX, x[i]);
    maxX = Math.max(maxX, x[i]);
    minY = Math.min(minY, y[i]);
    maxY = Math.max(maxY, y[i]);
  }

  const width = maxX - minX;
  const height = maxY - minY;

  return width * height;
}
