function alphabetic(s) {
return [...s].sort((a,b)=>a.localeCompare(b)).join("") === s
}
