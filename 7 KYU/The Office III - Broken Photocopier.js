function broken(x){
return [...x].map(m=> m === "1" ? "0" : "1").join("")
}
