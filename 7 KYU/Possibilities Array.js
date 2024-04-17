function isAllPossibilities(x){
let control = Array.from({length: x.length}, (e,i)=>{return i});

return control.every(m=>x.includes(m))
}
