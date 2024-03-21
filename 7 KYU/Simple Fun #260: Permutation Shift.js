function permutationShift(permutation) {
  for (let i = 0; i < permutation.length; i++) {
    permutation[i] = permutation[i] - i;
  }
  return Math.max(...permutation) - Math.min(...permutation);
}
