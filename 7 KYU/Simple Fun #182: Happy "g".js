function gHappy(str) {
return str.replace(/g{2,}/gi,"-").match(/g/) === null  
}
