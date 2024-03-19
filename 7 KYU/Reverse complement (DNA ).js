function reverseComplement(dna) {
  let count = 0;
  let res = [...dna].map(m => m === "T" ? "A" : m === "A" ? "T" : m === "G" ? "C" : m === "C" ? "G" : count++).reverse().join("");
  return count > 0 ? "Invalid sequence" : res
}
