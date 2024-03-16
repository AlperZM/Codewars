function sillycase(silly) {
  let len = Math.round(silly.length / 2);
  let len2 = silly.length % 2 === 0 ? silly.length / 2 : silly.length / 2 + 1
  return silly.slice(0, len).toLowerCase() + silly.slice(len2).toUpperCase()
}
