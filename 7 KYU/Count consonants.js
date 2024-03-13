function consonantCount(str) {
return str.replace(/[aeiou0-9]/gi,"").replace(/[^a-z]/gi,"").length
}
