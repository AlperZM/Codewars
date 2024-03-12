function nerdify(txt){
  return txt.replace(/[aAeEl]/g,(e)=>{
    return e.toLowerCase() === "a" ? 4 : e.toLowerCase() === "e" ? 3
    : e==="l" ? 1 : e
  })
}
