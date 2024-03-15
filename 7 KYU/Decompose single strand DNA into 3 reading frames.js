var decomposeSingleStrand = function(singleStrand) {
  let frame1 = [...singleStrand].map((m, i) => (i + 1) % 3 === 0 ? m + " " : m).join("").trim();
  let frame2 = singleStrand[0].concat(" " + [...singleStrand.slice(1)].map((m, i) => (i + 1) % 3 === 0 ? m + " " : m).join("").trim());
  let frame3 = singleStrand.slice(0, 2).concat(" " + [...singleStrand.slice(2)].map((m, i) => (i + 1) % 3 === 0 ? m + " " : m).join("").trim());

  return `Frame 1: ${frame1}\nFrame 2: ${frame2}\nFrame 3: ${frame3}`
}
