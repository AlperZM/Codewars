function diagonalSum(matrix){
return matrix.map((m,i,a)=>m.map(e=>m[i])[0]).reduce((a,b)=>a+b,0)
}
