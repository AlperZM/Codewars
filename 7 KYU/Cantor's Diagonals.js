function cantor(nestedList) {
  return nestedList.map((m,i)=>m[i] === 1 ? 0 : 1)
}
