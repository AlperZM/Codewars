function trim(x){
  return x.map((el, i)=> i < 2 ? el.map(e => e === '...' ? e : e = '|') : el.map(e => e = '...'))
}
