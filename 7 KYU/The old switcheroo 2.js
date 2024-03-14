function encode(str) {
return str.replace(/[a-z]/gi,t=>t.toLowerCase().charCodeAt()-96)
}
