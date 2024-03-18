function reverseSlice(str) {
  return [...str].reverse().map((_,i,a)=>a.slice(i).join(""))
}
