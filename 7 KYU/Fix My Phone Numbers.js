function isItANum(str) {
let num = str.replace(/[^0-9]/gi,"");
return (/^0[0-9]{10}/).test(num) ? num : "Not a phone number"
}
