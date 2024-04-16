function pernicious(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  const pN = arr.filter(v =>
    isPrime(
      v
        .toString(2)
        .split("")
        .reduce((a, b) => a + b * 1, 0)
    )
  );
  return pN.length ? pN : "No pernicious numbers";
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
