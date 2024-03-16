function countConsonants(str) {
return new Set([...str.toLowerCase().replace(/[^qzwsxdcrfvtgbyhnjmklp]/gi,"")]).size
}
