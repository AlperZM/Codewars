function motifLocator(sequence, motif) {
  let index = sequence.indexOf(motif) + 1;
  let lastIndex = sequence.lastIndexOf(motif) + 1;
  return !index ? [] : index === lastIndex ? [index] : [index, lastIndex];
}
