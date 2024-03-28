function minMinMax(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  let minAbs = 0;
  for (let i = min; i <= max; i++) {
    if (!array.includes(i)) {
      minAbs = i;
      break;
    }
  }
  return [min, minAbs, max];
}
