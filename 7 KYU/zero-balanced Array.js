function ìsZeroBalanced(n){
 return n.length > 0 && n.every(e => n.includes(-e)) && 
  n.reduce((a, b) => a + b,0) === 0;
}
