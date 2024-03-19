function insertDash(num) {
return [...String(num)].map((m,i,a)=>m % 2 !== 0 && a[i+1] % 2 !== 0 ? m+"-" : m)
  .join("").replace(/-*$/,"")
}
