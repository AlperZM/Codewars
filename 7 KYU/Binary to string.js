function binaryToString(binary){
  return binary.split("0b").map(m=>String.fromCharCode(parseInt(+m,2))).join("").slice(1)
}
