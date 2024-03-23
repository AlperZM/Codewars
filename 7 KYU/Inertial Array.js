let isInertial = arr => {
  var max = Math.max(...arr);
  var odds = arr.filter(e => e % 2 != 0);
  var evens = arr.filter(e => e % 2 == 0 && e != max);
  return arr.some(e => e % 2 != 0) && max % 2 == 0 && odds.every(o => evens.every(e => e <= o));
}
