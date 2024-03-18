function gcContent(dna) {
return dna.replace(/[^GC]/gi,"").length /dna.length * 100 || 0
}
