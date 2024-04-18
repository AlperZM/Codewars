function countingTriangles(V) {
  let isTriangle = (a, b, c) => {
    let max = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - max > max;
  }
  let count = 0;
  for (let i = 0; i < V.length - 2; i++) {
    for (let j = i + 1; j < V.length; j++) {
      for (let k = j + 1; k < V.length; k++) {
        if (isTriangle(V[i], V[j], V[k])) count++;
      }
    }
  }
  return count;
}
