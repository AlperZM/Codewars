function cupAndBalls(b, arr){
return arr.reduce((b, [x,y]) => (x == b ? y : y == b ? x : b), b);
}
