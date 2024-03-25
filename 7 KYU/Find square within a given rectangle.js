function innerSquare(rect, center, side) {
  let y = rect.findIndex(r => r.includes(center));
  let  x = rect[y].indexOf(center);
  side = (side - 1) / 2;
  return rect
    .slice(Math.max(0, y - side), Math.min(rect.length, y + side + 1))
    .map(r => r.slice(Math.max(0, x - side), Math.min(r.length, x + side + 1)));
}
