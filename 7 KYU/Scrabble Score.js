function scrabbleScore(str){
return [...str.replace(/[\W]/gi, "")].reduce((a,b)=> a + $dict[b.toUpperCase()],0) || 0
}
