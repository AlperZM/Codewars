function solve(s) {
  return Math.max(...s.replace(/\D/gi," ").split(" ").map(m=>m*1));
};
